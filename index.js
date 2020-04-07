require('dotenv').config()
/*= API:
four methods:
  - createReferal({userId, data})
  - createReferal({userId, parentId, data})
  - getReferrals(userId)
  - updateReferal(userId, {})
  - deleteReferral(userId)
*/
'use strict'
// module.exports = require('./lib/api')

const {
  createReferal,
  getReferrals,
  updateReferal,
  deleteReferral,
} = require('./lib/api')


function ref(user){
  console.log(user.children)
}

 getReferrals(2).then((user)=> ref(user))

// updateReferal(3, {balance:4883, name:"moNogs233"})

//deleteReferral(5)

// createReferal({
//   userId:1,
// //  parentId:'',
//   data:{balance:400, name:'Vasa Golub1'}
// })

// createReferal({
//   userId:'2',
//   parentId:'1',
//   data:{balance:502, name:`Vasa Golub${2}`}
// })

// createReferal({
//   userId:3,
//   parentId:2,
//   data:{balance:500, name:`Vasa Golub${3}`}
// })

// createReferal({
//   userId:4,
//   parentId:3,
//   data:{balance:500, name:`Vasa Golub${3}`}
// })

// createReferal({
//   userId:15,
//   parentId:4,
//   data:{balance:500, name:`Vasa Golub${3}`}
// })

// createReferal({
//   userId:"9",
//   parentId:"2",
//   data:{balance:500, name:`Vasa Golub${3}`}
// }).then((user)=>{
//   console.log(user)
// })
