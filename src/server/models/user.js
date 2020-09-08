const mongoose = require('mongoose');
const moment = require('moment');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const getNewIncFormatID = (str) => {
  const mas = str.split('-');
  // ["PE", "A00001"]

  const identifier = mas[0];
  // "PE"

  const record = mas[1];
  let series = record[0];
  // "A00001"
  console.log(mas, record);
  let number = [];
  const lseries = record.length;

  for (let i = 1; i < lseries; i += 1) {
    number.push(record[i]);
  } number = parseInt(number.join(''), 10);
  // 1
  console.log(number);
  if (number === 99999) {
    const seriesIndex = this.alphabet.indexOf(series);

    number = 1;
    series = this.alphabet[seriesIndex + 1];
  } else number += 1;

  let zeros = '';
  const lnum = number.toString().length;
  for (let i = 0; i < 5 - lnum; i += 1) {
    zeros += '0';
  }
  console.log(`${mas[0]}-${series}${zeros}${number}`);
  return `${mas[0]}-${series}${zeros}${number}`;
};


const User = new Schema({
  userid: {
      type: String,
      unique: true,
  },

  login: {
    type: String,
    unique: true,
  },
  password: String,
  maxScore: Number,

  salt: String,

  created: {
    type: Date,
    default: Date.now,
  },
}, {
  versionKey: false,
  usePushEach: true,
});

// User.methods.setPassword = function(password) {
//   this.salt = crypto.randomBytes(16).toString('hex');
//   this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
// };

// User.methods.validatePassword = function(password) {
//   const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//   return this.hash === hash;
// };

// User.methods.generateJWT = function() {
//   const today = new Date();
//   const expirationDate = new Date(today);
//   expirationDate.setDate(today.getDate() + 60);

//   return jwt.sign({
//     email: this.email,
//     id: this._id,
//     exp: parseInt(expirationDate.getTime() / 1000, 10),
//   }, 'secret');
// }

// User.methods.toAuthJSON = function() {
//   return {
//     _id: this._id,
//     email: this.email,
//     token: this.generateJWT(),
//   };
// };

User.pre('save', function (next) {
  if (this.isNew) {
    this.constructor
      .findOne({}, { userid: 1 })
      .sort({ userid: -1 })
      .exec((err, user) => {
        if (err) return next(err);

        console.log(user)
        if (!user) {
          this.userid = 'UI-A00001';
        } else this.userid = getNewIncFormatID(user.userid);
        next();
      });
  } else next();
});

module.exports = mongoose.model('User', User);