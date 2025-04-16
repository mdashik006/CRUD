import Movie from "../models/movies.model.js";

export const MovieIndex = async (req,res)=>{
    try {
        
        await res.json({message:"i have read the Message"});
        
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


export const MovieCreate = async (req,res)=>{
    const NewMovie = new Movie({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    });
    try {   
        // await res.json({message:"i have create the Message"});
        const movie = await NewMovie.save();
        console.log(req.body);
        return res.status(200).json(movie)
        
    } catch (error) {
        return res.status(404).json({message:error.message})
    }
}

export const MovieUpdate = async (req,res)=>{
    try {
        await res.json({message:"i have Update the Message"});
        
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const MovieDelete = async (req,res)=>{
    try {
        await res.json({message:"i have Delete the Message"});
        
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}