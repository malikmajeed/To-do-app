const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/', router)
       
mongoose.connect("mongodb://localhost:27017/todolist")
.then(()=>{console.log('mongodb Connected')})
.catch((error)=>{
    console.log(`an Error has occured while connecting to mongodb ${error}`)
})






app.listen(PORT,
    (console.log('server islistening at port 3000')))