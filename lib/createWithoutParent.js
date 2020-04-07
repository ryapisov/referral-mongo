const Referral = require('./db/model')

module.exports = function({userId, data}){
  return Referral
    .create({
      _id:userId,
      data:data,
      parent:{level_1:''},
      children:{levels_1:[]}
    })
    .then(()=>console.log('created successfully'))
    .catch((error)=>console.log('exception', error))
}
