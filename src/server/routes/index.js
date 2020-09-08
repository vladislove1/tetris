const router = require('express').Router();

const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

router.use('/chat', require('./chat'));

router.use('*', require('./web'));

router.use('/auth', require('./auth'));
router.use('/secret', isAuth, require('./secret'))

module.exports = router;
