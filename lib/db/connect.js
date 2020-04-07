const mongoose = require('mongoose')
const DATA_BASE = process.env.REFERRAL_DATA_BASE || 'mongodb://localhost:27017/referrals'

mongoose
  .set('useNewUrlParser', true)
  .set('useUnifiedTopology', true)
  .set('useFindAndModify', false)
  .connect(DATA_BASE)
  .catch( err => {console.error('Error id DB connection')} )
mongoose
  .connection
  .on('error', (err)=> console.log('подключение, ошибка'))
  .once('open', (err)=> console.log('успешное подключение'))

module.exports = mongoose
