const path = require('path');

let pathEnv = 'config/envs/';

switch (process.env.HOME) {
  case '/home/sgmteam': pathEnv = '.env'; break;

  default: { pathEnv += 'localhost.env'; break; }
}

require('dotenv').config({
  path: path.join(__dirname, `../${pathEnv}`),
});

const morgan = require('./morgan');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const RedisStore = require('connect-redis')(session);
const bodyParser = require('body-parser');
// const RedisStore = require('connect-redis')(session);

const redis = require('./databases/redis').client;
require('./databases/mongodb');

const log = require('./winston')(module);

const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan);
app.use(express.static(path.join(__dirname, '../../../dist')));

const sessionMiddleware = session({
  store: new RedisStore({client: redis}),
  secret: 'qwaqwa',
  resave: true,
  rolling: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 1000,
    httpOnly: false,
  },
});
app.use(cookieParser());
app.use(sessionMiddleware);
app.use(passport.initialize());
require('./passport')(passport);
app.use(passport.session());
app.use('/', require('../routes'));

process.on('uncaughtException', (err) => {
  log.error(err);
  process.exit(1);
});

module.exports = app;
