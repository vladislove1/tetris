const router = require('express').Router();

router.use('/', require('./web'));
router.use('/user', require('./user'));


module.exports = router;