import express from "express";
import TaskController from "../controllers/task";
const route = express.Router();

route.get("/",TaskController.getAllTasks);
route.get("/:id",TaskController.getSingleTask);
route.post("/create",TaskController.createTask);
route.put("/update/:id",TaskController.updateTask);
route.delete("/delete/:id",TaskController.deleteTask);

export default route;