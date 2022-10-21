import express  from "express";
import cors from "cors";
import connectDb from "./database/db";
import taskRoute from "./routes/task";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT

connectDb()
app.listen(PORT || 6000,() =>{
    console.log(`Server is running on ${PORT}`)
});

app.use("/tasks",taskRoute);