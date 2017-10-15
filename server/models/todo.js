const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  plan:'string',
  status:'boolean',
  iduser:[{type:mongoose.Schema.Types.ObjectId, ref: 'penggunas'}]
})

var plannings = mongoose.model('plannings', schema)

module.exports = plannings
