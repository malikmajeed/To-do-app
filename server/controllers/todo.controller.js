

const Task = require("../models/todo.model");

//Controller for adding tasks

const addTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    console.log("Controller hit");

    const newTask = new Task({ title, description, status });
    console.log(newTask);

    await newTask.save();
    res.status(200).send("Task Added");
  } catch (error) {
    console.error(error); // ✅ Logs error for debugging
    res
      .status(500)
      .json({
        message: "An error occurred while adding the task",
        error: error.message,
      });
  }
};


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

module.exports = { addTask, deleteTask };
