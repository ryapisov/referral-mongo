const Referral = require('../../../lib/db/referralModel')
const mongoose = require('mongoose')
const database = process.env.REFERRAL_MONGODB_TEST

mongoose.connect(database,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

describe('\nProperties in the model Referral:', ()=>{
  const user = {
    _id:'1',
    data:{example:'you data'},
    parent:{level_1:''},
    children:{levels_1:[]}
  }

  test('should be properties: _id, data, parent, children', async()=>{
    let data
    try{
      data = await Referral.create(user)
      expect(typeof data._id).toEqual("string")
      expect(typeof data.data).toEqual("object")
      expect(typeof data.parent).toEqual("object")
      expect(typeof data.children).toEqual("object")
    }catch(e){
      expect(e.message).toBe('error')
    }finally{
      await Referral.findOneAndRemove(data._id)
      await Referral.collection.drop()
    }
  })
})
