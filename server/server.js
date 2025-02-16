const express = require('express');
const mongoose=require('mongoose');
const app = express();

const {addTask, deleteTask, updateTask} = require('./controllers/todo.controller')

app.use(express.json());         
mongoose.connect("mongodb://localhost:27017/todolist")
.then(()=>{console.log('mongodb Connected')})
.catch((error)=>{
    console.log(`an Error has occured while connecting to mongodb ${error}`)
})

app.post('/', addTask);
app.delete('/', deleteTask);
app.put('/', updateTask)

app.get('/', (req,res)=>{
    res.send('HOME PAGE');
    console.log('home page');
})

app.listen(3000,
    (console.log('server islistening at port 3000')))