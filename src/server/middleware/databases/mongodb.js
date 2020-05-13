const mongoose = require('mongoose');

const { database } = require('../../config');
const log = require('../winston')(module);

mongoose.Promise = global.Promise;

mongoose.connect(database.url, database.options)
  .then(() => log.info('Connection to mongoDB is successful'))
  .catch(err => log.error(err));

module.exports = mongoose;
