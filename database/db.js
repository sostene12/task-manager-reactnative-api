import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const url=process.env.MONGODB_URL;
const connectDb = async() =>{
    try {
        await mongoose.connect(url,{   useNewUrlParser: true,useUnifiedTopology: true});
        console.log("database connected")
    } catch (error) {
        console.log({error:error.message});
    }

}

export default connectDb