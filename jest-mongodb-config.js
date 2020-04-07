require('dotenv').config()

module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: process.env.REFERRAL_MONGODB_VERSION,
      skipMD5: true
    },
    autoStart: false
  }
}
