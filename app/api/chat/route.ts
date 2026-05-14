import { NextResponse } from "next/server";
import { Index } from "@upstash/vector";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { GoogleGenerativeAI } from "@google/generative-ai";

const index = new Index({
  url: process.env.UPSTASH_VECTOR_REST_URL as string,
  token: process.env.UPSTASH_VECTOR_REST_TOKEN as string,
});

const embeddings = new GoogleGenerativeAIEmbeddings({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
  model: "gemini-embedding-001",
});

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY as string);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userMessage = body.messages[body.messages.length - 1].content;

    const queryVectorFull = await embeddings.embedQuery(userMessage);
    const queryVector = queryVectorFull.slice(0, 1536);

    const searchResults = await index.query({
      vector: queryVector,
      topK: 3,
      includeMetadata: true,
    });

    const contextText = searchResults
      .map((res) => res.metadata?.text)
      .join("\n\n---\n\n");

    const prompt = `
      Eres el asistente virtual del portfolio de Milagros Alvarez.
      Tu objetivo es responder preguntas sobre ella basandote UNICAMENTE en la siguiente informacion extraida de su perfil.
      Si te preguntan algo que no esta en la informacion, responde amablemente que no tienes ese dato y sugiere que la contacten directamente a milagrosalvarez2604@gmail.com o por LinkedIn.
      Se amable, profesional, entusiasta y utiliza un tono natural.

      INFORMACION DE MILAGROS:
      ${contextText}

      PREGUNTA DEL USUARIO:
      ${userMessage}
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json({
      role: "assistant",
      content: responseText,
    });

  } catch (error) {
    console.error("Error en la ruta de chat:", error);
    return NextResponse.json(
      { error: "Hubo un error procesando tu consulta." },
      { status: 500 }
    );
  }
}