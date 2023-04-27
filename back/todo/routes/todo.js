const express = require("express");
const controller = require("../controller/Ctodo");
const router = express.Router();

router.get('/todos',(req,res)=>{})
router.post('/todo',(req,res)=>{})
router.patch('/todo/:todoId',(req,res)=>{})
router.delete('/todo/:todoId',(req,res)=>{})