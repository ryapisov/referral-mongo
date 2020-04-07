const Referral = require('./db/model')

module.exports = function(userId, data){
  return Referral
    .findOneAndUpdate( {_id:userId}, {$set:{data:data}} )
    .then(()=>console.log('updated successfully'))
    .catch((error)=>console.log('exception', error))
}
