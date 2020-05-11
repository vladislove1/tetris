const router = require('express').Router();

const { user } = require('../controllers')

router.get('/', user.getUserInfo);
router.post('/add', user.addUser);

module.exports = router;