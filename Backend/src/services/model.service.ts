import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatCohere } from "@langchain/cohere"

import config from "../config/config.js";

export const geminiModel = new ChatGoogle({
    apiKey: config.GOOGLE_API_KEY,
    model: "gemini-2.5-flash-lite",
});

const mistralModel = new ChatMistralAI({
    model: "mistral-medium-latest",
    temperature: 0,
    apiKey: config.MISTRAL_API_KEY
});

export const cohereModel = ({
    model: "command-r-plus",
    temperature: 0,
    maxRetries: 2,
    apiKey: config.COHERE_API_KEY
})