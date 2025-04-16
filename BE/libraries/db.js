import mongoose from "mongoose";

export const ConnectDB = async (req,res)=>{
    try {
        await mongoose.connect(process.env.MongoDB_URL);
        console.log("Database Connect Succesfully...");
        
    } catch (error) {
     console.log(error);
    }
}