import mongoose,{Schema } from "mongoose";

const schema = new Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            unique:true,
            required:true
        },
        password:
        {
            type:String,
            required:true,
        },
    }
)

const Movie = mongoose.model("Movie",schema)

export default Movie