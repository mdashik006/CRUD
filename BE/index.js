import express from 'express'
import dotenv from 'dotenv'
import MovieRouter from './routes/movies.route.js'
import { ConnectDB } from './libraries/db.js';



const app = express();
dotenv.config();

app.use(express.json());

ConnectDB();

const port = process.env.PORT || 8868;



app.get("/",(req,res)=>{ 
    res.json({message:"hello guys"})
});

app.use("/movies",MovieRouter)

app.listen(port,()=>{
    console.log(`server startted successfully  on http://localhost:${port}/`);  
});