const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/todo')

let schema = new mongoose.Schema({
  plan:'string',
  status:'boolean',
  iduser:[{type:mongoose.Schema.Types.ObjectId, ref: 'users'}]
})

var plannings = mongoose.model('plannings', schema)

module.exports = plannings
