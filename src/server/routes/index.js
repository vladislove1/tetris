const router = require('express').Router();

router.use('/chat', require('./chat'));

router.use('*', require('./web'));

router.use('/auth', require('./auth'));

module.exports = router;
