import express  from "express";
import cors from "cors";
import connectDb from "./database/db";
import taskRoute from "./routes/task";

const app = express();
app.use(express.json());
app.use(cors());

connectDb()
app.listen(3001,() =>{
    console.log("Server is running on 3001")
});

app.use("/tasks",taskRoute);