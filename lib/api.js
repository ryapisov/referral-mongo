const mongoose = require('./db/connect')
const createWithoutParent = require('./createWithoutParent')
const createWithParent = require('./createWithParent')
const deleteReferral = require('./deleteReferral')
const updateReferal = require('./updateReferal')
const getReferrals = require('./getReferrals')
/*============================= program API:
four methods:
  - createReferal(userId, data={})
  - createReferal(userId, parentId, data={})
  - getReferrals(userId)
  - updateReferal(userId)
  - deleteReferral(userId)
*/
module.exports.createReferal = function(data){
  return data.userId && data.parentId
    ? createWithParent(data)
    : createWithoutParent(data)
}

module.exports.updateReferal = function(userId, data){
  return updateReferal(userId, data)
}

module.exports.getReferrals = function(userId){
  return getReferrals(userId)
}

module.exports.deleteReferral = function(userId){
  return deleteReferral(userId)
}
