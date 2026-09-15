import express from "express";
import runGraph from "./ai/graph.ai.js";

const app = express();

app.get('/', async (req, res) => {
    res.status(200).send('Resource Successfully Created!')
})

app.get('/graph', async (req, res) => {
    const result = await runGraph('WAP to factorial of a number?')
    res.json(result)
})

export default app;