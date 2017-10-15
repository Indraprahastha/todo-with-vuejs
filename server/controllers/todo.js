let todo = require('../models/todo')
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config()

let id = ''
//-------------------------------------------------------- getTodo(v)
const getTodo = (req,res) => {
  let filter = jwt.verify(req.headers.token, process.env.DB_HOST,(err,decoded)=>{
    return decoded._id
    console.log(decoded);
  })
  todo.find({iduser:filter}).populate('iduser','username').then((todo)=>{
    console.log(filter);
    id = filter
    res.send(todo)
  }).catch((err)=>{
    res.send(err)
  })
}
//-------------------------------- Dadrurat
const getAllTodo = (req,res) => {
  todo.find().populate('iduser','username').then((todo)=>{
    res.send(todo)
  }).catch((err)=>{
    res.send(err)
  })
}
//---------------------------------------------------- createTodo(v)
const addTodo = (req,res) => {
  // let id = jwt.verify(req.headers.token, process.env.DB_HOST,(err,decoded)=>{
  //   return decoded._id
  // })
  todo.create({
    plan:req.body.plan,
    status:req.body.status,
    // iduser:id
    iduser:id,
  }).then((todo)=>{
    res.send(todo)
  }).catch((err)=>{
    res.send(err)
  })
}
//----------------------------------------------------- fineTodo(v)
const findTodo = (req,res) => {
  todo.findById({
    _id:req.params.id
  }).then((todo)=>{
    res.send(todo)
  }).catch((err)=>{
    res.send(err)
  })
}
//----------------------------------------------------- editTodo(v)
const editTodo = (req,res) => {
  // let id = jwt.verify(req.headers.token, process.env.DB_HOST,(err,decoded)=>{
  //   return decoded._id
  // })
  todo.update({
    _id:req.params.id
  },{
    plan:req.body.plan,
    status:req.body.status,
    iduser:id
  }).then((todo)=>{
    res.send(todo)
  }).catch((err)=>{
    res.send(err)
  })
}
//----------------------------------------------------- deleteTodo(v)
const deleteTodo = (req,res) => {
  todo.remove({
    _id:req.params.id
  }).then((todo)=>{
    res.send(todo)
  }).catch((err)=>{
    res.send(err)
  })
}

module.exports = {
  getTodo,
  addTodo,
  findTodo,
  editTodo,
  deleteTodo,
  getAllTodo
}
