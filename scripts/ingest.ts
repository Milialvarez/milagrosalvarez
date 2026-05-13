import fs from "fs";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { Index } from "@upstash/vector";

const run = async () => {
  try {
    console.log("1. Inicializando conexiones...");
    
    const index = new Index({
      url: process.env.UPSTASH_VECTOR_REST_URL as string,
      token: process.env.UPSTASH_VECTOR_REST_TOKEN as string,
    });

    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: process.env.GOOGLE_GENAI_API_KEY,
      model: "gemini-embedding-001", // El modelo actualizado y vigente
    });

    console.log("2. Leyendo tus archivos de conocimiento...");
    const knowledgePath = path.join(process.cwd(), "knowledge");
    const files = fs.readdirSync(knowledgePath).filter(file => file.endsWith(".md"));

    const documents: Document[] = [];
    for (const file of files) {
      const content = fs.readFileSync(path.join(knowledgePath, file), "utf-8");
      documents.push(new Document({ 
        pageContent: content, 
        metadata: { source: file } 
      }));
    }

    console.log("3. Fragmentando documentos...");
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const splitDocs = await splitter.splitDocuments(documents);
    console.log(`Se generaron ${splitDocs.length} fragmentos de informacion.`);

    console.log("4. Generando vectores con Gemini (uno por uno para evitar bloqueos)...");
    
    const vectors: number[][] = [];
    for (let i = 0; i < splitDocs.length; i++) {
      console.log(`   Vectorizando fragmento ${i + 1} de ${splitDocs.length}...`);
      const vector = await embeddings.embedQuery(splitDocs[i].pageContent);
      
      const vectorRecortado = vector.slice(0, 1536);
      
      vectors.push(vectorRecortado);
    }

    console.log(`Listo! Se generaron ${vectors.length} vectores. Dimension del primero: ${vectors[0]?.length}`);

    if (!vectors || vectors.length === 0 || vectors[0].length !== 1536) {
      throw new Error("La dimension de los vectores no es 1536. Algo fallo en el recorte.");
    }

    console.log("5. Subiendo la informacion a Upstash...");
    
    const upstashData = splitDocs.map((doc, i) => ({
      id: `chunk-${Date.now()}-${i}`,
      vector: vectors[i],
      metadata: {
        text: doc.pageContent, 
        source: doc.metadata.source
      }
    }));

    await index.upsert(upstashData);

    console.log("Exito absoluto. Tu RAG ya se aprendio toda tu informacion.");
    
  } catch (error) {
    console.error("Error durante la ingesta:", error);
  }
};

run();