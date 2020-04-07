const Referral = require('./db/model')

const LEVEL = process.env.REFERRAL_LEVEL || 3

function _update(find, query){
  return Referral.findOneAndUpdate(find, query, {new: true})
    .then((user)=>user)
    .catch((err)=>`exception\n\n${err}`)
}

function _create({userId, data, parent}){
  return Referral
    .create({_id:userId, data, parent})
    .then((user)=>{
      spinner_1(userId, user)

      return user
    })
    .catch((err)=>`exception\n\n${err}`)
}

function replace(userId, parentId, i, user){
  const find  = {_id:parentId}
  const query = {$push:{["children.levels_"+i]:{_id:userId, data:user.data}}}

  return _update(find, query)
}

function spinner_1(userId, user){
  for (let i=2; i<=LEVEL; i++){
    let parentId = user.parent[`level_${i}`]
    !!parentId ? replace(userId, parentId, i, user) : null
  }
}

function spinner_2(acc, user){
  for(let i=1; i<LEVEL; i++){
    !!user.parent["level_"+i]
      ? acc[`level_${i+1}`] = user.parent["level_"+i]
      : null
  }
  return acc
}

module.exports = function({userId, parentId, data}){
  const query = {$push:{"children.levels_1":{_id:userId, data:data}}}
  const find = {_id:parentId}
  return _update(find, query)
    .then((user)=>{
      const parent = spinner_2({ level_1:parentId }, user)

      return _create({userId, data, parent})
  })
  .catch((err)=>`exception\n\n${err}`)
}
