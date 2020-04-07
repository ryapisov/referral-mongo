const mongoose = require('mongoose')

const schema = mongoose.Schema({
  _id:{type: String},
  data:Object,
  parent:Object,
  children:Object
})

module.exports = mongoose.model('Referral', schema)
