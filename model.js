const mongoose = require('mongoose')

const schema = mongoose.Schema({
  _id: {type: String},
  user:Object,
  parent:Object,
  childrens:[]
})

module.exports = mongoose.model('User', schema)
