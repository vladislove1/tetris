const router = require('express').Router();

router.use('/chat', require('./chat'));

router.use('*', require('./web'));

module.exports = router;
