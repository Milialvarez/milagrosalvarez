/* eslint-disable @typescript-eslint/no-explicit-any */
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const run = async () => {
  try {
    const apiKey = process.env.GOOGLE_GENAI_API_KEY;
    
    if (!apiKey) {
      console.log("❌ No se encontró la API Key en el archivo .env.local");
      return;
    }

    console.log("🔍 Consultando a Google AI Studio...");
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();
    
    if (data.models) {
      console.log("\n🤖 Modelos de CHAT disponibles para tu clave:");
      
      // Filtramos para que solo te muestre los modelos generativos (los de chat)
      const chatModels = data.models.filter((m: any) => 
        m.supportedGenerationMethods.includes("generateContent")
      );
      
      chatModels.forEach((m: any) => {
        // Le sacamos el prefijo "models/" para que veas el nombre exacto que hay que usar
        console.log(`✅ ${m.name.replace('models/', '')}`);
      });
      
    } else {
      console.log("❌ Error consultando modelos:", data);
    }
  } catch (error) {
    console.error("❌ Falló la conexión:", error);
  }
};

run();