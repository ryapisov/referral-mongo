# Referral-mongo  
### version: Beta

### Features

- The change the referral chain
- Referral system using [mongoDB](https://www.mongodb.com/) a distributed General purpose database based on documents

### Installation

installing the module

```bash
npm i referral-mongo
```

installing the database

```bash
sudo apt install -y mongodb

sudo systemctl start mongodb
```

### Сonnection

```js
const {
  createReferal,
  getReferrals,
  updateReferal,
  deleteReferral
} = require('referral-mongo')
```

### API create referral without parent

returns a Promise:

```js
createReferal({
  userId: 1,
  data:{example:"your data"}
})
```

### API create referral with parent

returns a Promise:

```js
createReferal({
  userId: 2,
  parentId:1,
  data:{example:"your data"}
})
```

### API update referral

returns a Promise:

```js
createReferal({
  userId: 2,
  data:{example:"your data"}
})
```

### API delete referral

returns a Promise:

```js
deleteReferal({
  userId: 2,
  data:{example:"your data"}
})
```

----
### Edit the **.env** file

```
REFERRAL_LEVELS=3  // Set the depth of the referral system. By default three.

REFERRAL_MONGODB_URL='mongodb://localhost:27017/referrals'  // Database address.

REFERRAL_MONGODB_VERSION=3.6.3  // Version of your database.
```
----
