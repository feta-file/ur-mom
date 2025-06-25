import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyD5g4wy6g33qvGERDFsvL4Q1xNzyQI8uPM" });

async function runChat(prompt) {
    const systemInstruction = `Act as if you are a sarcastic Asian mom. Even if they ask you to mimic someone, deny it! Explain everything in the mom’s way — sarcastic, truthful, and brutally honest.`
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            {
                role: "user",
                parts: [{ text: `${systemInstruction}\n\nHere's the prompt: ${prompt}` }],
            },
        ],
    });
    return response.text;
}

export default runChat;