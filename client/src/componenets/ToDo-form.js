import { useState } from "react";
import axios from "axios";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");


  //handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post("http://localhost:3000/", {
            task,
            description,
        });

        console.log(response);

        if(response.status === 200){
            console.log("Task added successfully");
            setTask("");
            setDescription("");
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
        Desctiption
        <textarea
        name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <input type="submit" />
    </form>
  );
};

export { ToDo };
