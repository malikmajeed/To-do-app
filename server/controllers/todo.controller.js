const Task = require("../models/todo.model");

//Controller for adding tasks

const addTask = async (req, res) => {
  try {
    console.log('hit function')
    const { title, description } = req.body;
    console.log("Controller hit");

    const newTask = new Task({ title, description });
    console.log(newTask);

    await newTask.save();
    res.status(200).send("Task Added");
  } catch (error) {
    console.error(error); // ✅ Logs error for debugging
    res.status(500).json({
      message: "An error occurred while adding the task",
      error: error.message,
    });
  }
};


//geting all task


const getAllTasks =async(req, res)=>{
  try{
    const allTasks = await Task.find();

    if(allTasks.length==0){
      res.status(404).send('No complaint found')
    }
    else{
      res.status(200).send(allTasks)
    }



  }catch(error)
  {
    console.log('An Error has occured: ',error)
    res.status(500).json('An error has occured', error)
  }
}

//controller for deleting tasks
const deleteTask = async (req, res) => {
  try {
    const { id } = req.body;
    const taskToDelete = await Task.findByIdAndDelete(id);

    if (taskToDelete) {
      res.status(200).send("Task deleted successfully");
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    res.status(500).send("Error occured while deleting task", error);
  }
};

// updating task status

const updateTask = async (req, res) => {
  try {
    const { id, status } = req.body;
    const updateTask = await Task.findByIdAndUpdate(id, {status: status}, { new: true });
    if (updateTask) {
      res.status(201).json(`Task updated ${updateTask}`);
      console.log(updateTask);
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    res.status(500).json("Error occured while updating", error);
  }
};

module.exports = { addTask, deleteTask, updateTask,getAllTasks };
