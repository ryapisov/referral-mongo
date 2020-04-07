const Referral = require('./db/model')

module.exports = function(userId){
  return Referral
    .findById(userId, {parent:0, __v:0, _id:0})
    .then((user)=> user)
    .catch((error)=>console.log('exception', error))
}
