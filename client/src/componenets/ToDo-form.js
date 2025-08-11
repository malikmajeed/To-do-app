import { useState } from "react";
import axios from "axios";

const ToDoForm= ({onTaskAdded}) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{

      console.log('sending func')
        const response = await axios.post("http://localhost:3000/", {
            title:task,
            description:description,
        });
        if(response){console.log('success')}
        console.log("Task added: ",response);

        if(response.status === 200){
            console.log("Task added successfully");
            setTask("");
            setDescription("");
            onTaskAdded();
        alert("Task added successfully");
        }

    }catch(error){
        console.log(error);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="todo-form-label">
        Task
        <input
        name="task"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </label>
      <label className="todo-form-label">
        Description
        <input
        name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default ToDoForm;
