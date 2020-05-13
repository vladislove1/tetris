const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '../../../.env'),
});

const morgan = require('./morgan');
const express = require('express');
const bodyParser = require('body-parser');
// const RedisStore = require('connect-redis')(session);

// const redis = require('./databases/redis').client;
require('./databases/mongodb');

const log = require('./winston')(module);

const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan);
app.use(express.static(path.join(__dirname, '../../../dist')));

app.use('/', require('../routes'));

process.on('uncaughtException', (err) => {
  log.error(err);
  process.exit(1);
});

module.exports = app;
