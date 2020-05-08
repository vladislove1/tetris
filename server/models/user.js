const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const getNewIncFormatID = (str) => {
  const mas = str.split('-');
  // ["PE", "A00001"]

  const identifier = mas[0];
  // "PE"

  const record = mas[1];
  let series = record[0];
  // "A00001"

  let number = [];
  const lseries = record.length;

  for (let i = 1; i < lseries; i += 1) {
    number.push(record[i]);
  } number = parseInt(number.join(''), 10);
  // 1

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

  return `${mas[0]}-${series}${zeros}${number}`;
};


const User = new Schema({
  userid: {
      type: String,
      unique: true,
  },

  name: String,
  password: String,
  maxScore: Number,

  created: {
    type: Date,
    default: Date.now,
  },
}, {
  versionKey: false,
});

User.pre('save', function (next) {
  if (this.isNew) {
    this.constructor
      .findOne({}, { userid: 1 })
      .sort({ userid: -1 })
      .exec((err, user) => {
        if (err) return next(err);

        console.log(user)
        if (!user) {
          this.userid = 'UI-A00000';
        } else this.userid = getNewIncFormatID(user.userid);
        next();
      });
  } else next();
});

module.exports = mongoose.model('User', User);