import Task from "../models/task";

class TaskController{
    static async createTask(req,res){
        try {
            const newTask = new Task({
                title:req.body.title,
                description:req.body.description
            });
            const task = await newTask.save();
            res.status(201).json(task)
        } catch (error) {
            res.json({error:error.message});
        }
    }

    static async getAllTasks(req,res){
        try {
            const allTasks = await Task.find();
            res.status(200).json(allTasks);
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    }

    static async getSingleTask(req,res){
        try {
            const task = await Task.findById({_id:req.params.id});
            res.status(200).json(task);
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    }

    static async deleteTask(req,res){
        try {
            await Task.findByIdAndDelete({_id:req.params.id});
            res.status(200).json({message:'Task Deleted successfully.'})
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    }

    static async updateTask(req,res){
        try {
            const updatedTask = await Task.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true});
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    }
}

export default TaskController;