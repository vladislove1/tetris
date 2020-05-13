const router = require('express').Router();

const { web } = require('../controllers')

router.get('/', web.viewIndex);

module.exports = router;