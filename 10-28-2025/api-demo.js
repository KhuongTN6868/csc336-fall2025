import { GoogleGenAI } from "@google/genai";   

const ai = new GoogleGenAI({
    apiKey: "AIzaSyCUd2Iz4dfX2CCJUg6AAmsm2egKVWOpWD0"

});

async function generateText(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });


    return response.text;
}

let prompt = "Give me a list of 10 uninteresting things";

let llmText = await generateText(prompt);
console.log(llmText);



