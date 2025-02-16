// import { Router } from "express";

const express = require('express')

const router= express.Router();


const {addTask, deleteTask, updateTask, getAllTasks} = require('./controllers/todo.controller')



router.post('/', addTask);
router.delete('/', deleteTask);
router.put('/', updateTask)
router.get('/', getAllTasks)


module.exports= router;