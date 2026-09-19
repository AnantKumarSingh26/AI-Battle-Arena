import express from "express";
import runGraph from "./ai/graph.ai.js";
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors());


app.get('/', async (req, res) => {
    res.status(200).send('Resource Successfully Created!')
})

app.post('/graph', async (req, res) => {
    // const result = await runGraph('WAP to factorial of a number?')
    try {
        const userQuestion = req.body.prompt;
        
        const result = await runGraph(userQuestion);
        res.json(result);
    } catch (error) {
        console.error("Backend App error :",error);
        res.status(500).json({error:"Graph failed to run"});
    }
})

export default app;