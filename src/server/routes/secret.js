const router = require('express').Router();

const { secret } = require('../controllers')

router.get('/', secret.viewIndex);

module.exports = router;