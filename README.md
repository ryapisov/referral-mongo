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
### API get referrals

returns a Promise:

```js
getReferrals(userId:5)
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

### Set the depth of the referral system. By default three.

```bash
export REFERRAL_LEVELS=3
```

### Database address

```bash
export REFERRAL_DATA_BASE='mongodb://localhost:27017/referrals'
```
