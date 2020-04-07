const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  _id:{ type:String, required:true },
  data:Object,
  parent:Object,
  children:Object
})

module.exports = mongoose.model('Referral', schema)
