const mongoose = require('./connect') // mongoose.connection.close(()=> console.log('база отключена успешно'))
const User = require('./model')

let level = process.env.REFERRAL_LEVEL || 3

function message(text){
  console.log(text)
}

function _update(userId, parentId, level){
  if (!!parentId){
    User.findOneAndUpdate({_id:parentId}, {$push: { "childrens":{_id:userId, level} }}, {new: true})
      .then(()=> message('=)'))
      .catch(()=> message('err, _update'))
  }
}

function _spinner(userId, user){
  for (let i=1; i<=level; i++){
    setTimeout(function(){
      let parentId = user.parent[`level${i+1}`]
      _update(userId, parentId, i+1 )
    }, 200 * i)
  }
}

function _withParent(userId, parentId, data){
  return User.findOneAndUpdate( {_id:parentId}, {$push: { "childrens":{_id:userId, level:"1"} }}, {new: true})
    .then((user)=>{
      const parent = {
        level1:parentId
      }

      for (let i=2; i<=level; i++){
        if (!!user.parent[`level${i-1}`]){
          parent[`level${i}`] = user.parent[`level${i-1}`]
        }
      }

      return User.create({
          _id:userId,
          user:data,
          parent:parent
        })

        .then((u)=>{
          _spinner(userId, u)
        })
        .then(()=>  message('referral was created successfully') )
        .catch(()=> message('err, _withParent: the referral exists'))
    })
    .catch(()=>message('err, _withParent'))
}

function _withoutParent(userId, data){
  User.create({_id:userId, user:data, parent:{level1:''}, logo:'22' })
    .then((user)=> message('referral was created successfully', user))
    .catch(()=> message('err, _withoutParent: the referral exists'))
}

async function newReferal({userId, data, parentId}){
  try{
    return userId && parentId
      ? await _withParent(userId, parentId, data)
      : await _withoutParent(userId, data)
  }catch(err){
    throw 'err: function newReferal'
  }
}

async function updateReferral(userId, data){
  try{
    await User.findOneAndUpdate({_id:userId}, { $set: {user:data} } )
  }catch(err){
    throw 'err: updateReferral'
  }
}


async function getReferals(userId){
  try{
    return await User.findById(userId, {parent:0})
  }catch(err){
    throw 'err: function getReferals'
  }
}

module.exports = {
  update: updateReferral,
  create: newReferal,
  get: getReferals
}
