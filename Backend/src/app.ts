import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('Resource Successfully Created!')
})

export default app;