const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  username:'string',
  password:'string',
  email:'string'
})

var penggunas = mongoose.model('penggunas', schema)

module.exports = penggunas
