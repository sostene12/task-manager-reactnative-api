import mongoose from "mongoose";

const url='mongodb+srv://electronic-shop:bzkarimsostene@cluster0.tvlir.mongodb.net/assignment?retryWrites=true&w=majority'
const connectDb = async() =>{
    try {
        await mongoose.connect(url,{   useNewUrlParser: true,useUnifiedTopology: true});
        console.log("database connected")
    } catch (error) {
        console.log({error:error.message});
    }

}

export default connectDb