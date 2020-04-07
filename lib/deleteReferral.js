const Referral = require('./db/model')

module.exports = function(userId){
  return Referral
    .findByIdAndRemove(userId)
    .then(()=>console.log('deleted successfully'))
    .catch((error)=>console.log('exception', error))
}
