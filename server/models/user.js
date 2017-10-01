const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/todo')

let schema = new mongoose.Schema({
  username:'string',
  password:'string',
  email:'string'
})

var users = mongoose.model('users', schema)

module.exports = users
