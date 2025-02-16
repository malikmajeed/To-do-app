import { useState, useEffect } from 'react';
import axios from 'axios';

import ToDoForm  from './ToDo-form'
import GetTodosCard from './get-todos-card'



const ToDos = ()=>{

    const [todos, setTodos]=useState([]);


    //function to get all todos
    const getTodos = async ()=>{
        try{
            console.log('hit inside');
            const response = await axios("http://localhost:3000/");
            console.log(response);
            if(response.status===200){
                setTodos(response.data)
            }
        }
        catch(error){
            console.log(`an Error occured while fetching todos : ${error}`);
        }
    }

    useEffect(() => {
        getTodos();
    }, []); 


    return(
        <div>
            <ToDoForm  onTaskAdded={getTodos} />
            <GetTodosCard  todos={todos} />
        </div>
    );

}



export default ToDos;