let todo = require('../models/todo')
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config()

//-------------------------------------------------------- getUser(v)
const getTodo = (req,res) => {
  let filter = jwt.verify(req.headers.token, process.env.DB_HOST,(err,decoded)=>{
    return decoded._id
    console.log(decoded);
  })
  todo.find({iduser:filter}).populate('iduser','username').then((todo)=>{
    console.log(filter);
    res.send(todo)
  }).catch((err)=>{
    res.send(err)
  })
}
//---------------------------------------------------- createUser(v)
const addTodo = (req,res) => {
  todo.create({
    plan:req.body.plan,
    status:req.body.status,
    iduser:req.body.iduser,
  }).then((todo)=>{
    res.send(todo)
  }).catch((err)=>{
    res.send(err)
  })
}
//----------------------------------------------------- fine data(v)
// const findUser = (req,res) => {
//   user.findById({
//     _id:req.params.id
//   }).then((user)=>{
//     res.send(user)
//   }).catch((err)=>{
//     res.send(err)
//   })
// }
//----------------------------------------------------- edit data(v)
// const editUser = (req,res) => {
//   let hash = bcrypt.hashSync(req.body.password, salt);
//   user.update({
//     _id:req.params.id
//   },{
//     username:req.body.username,
//     password:hash,
//     email:req.body.email
//   }).then((user)=>{
//     res.send(user)
//   }).catch((err)=>{
//     res.send(err)
//   })
// }
//----------------------------------------------------- delete data(v)
// const deleteUser = (req,res) => {
//   user.remove({
//     _id:req.params.id
//   }).then((user)=>{
//     res.send(user)
//   }).catch((err)=>{
//     res.send(err)
//   })
// }
//----------------------------------------------------- delete data(v)
// const loginUser = (req,res) => {
//   user.findOne({
//     username:req.body.username
//   })
//   .then(data => {
//     if (bcrypt.compareSync(req.body.password,data.password)) {
//       var token = jwt.sign({
//         _id:data._id,
//         username: data.username,
//         email: data.email
//       },process.env.DB_HOST);
//       res.send(token)
//     } else {
//       res.send('Fail')
//     }
//   })
//   .catch((err)=>{
//     res.send(err.message)
//   })
// }


module.exports = {
  getTodo,
  addTodo,
  // findUser,
  // editUser,
  // deleteUser,
  // loginUser
}
