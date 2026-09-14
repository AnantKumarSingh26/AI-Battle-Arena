import config from "../config/config.js";
import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatCohere } from "@langchain/cohere"


export const geminiModel = new ChatGoogle({
    apiKey: config.GOOGLE_API_KEY,

    model: "gemini-2.5-flash-lite",
});

export const mistralModel = new ChatMistralAI({
    model: "open-mistral-7b",
    temperature: 0,
    apiKey: config.MISTRAL_API_KEY
});

export const cohereModel =new ChatCohere({
    model: "command-r-plus",
    temperature: 0,
    maxRetries: 2,
    apiKey: config.COHERE_API_KEY
})