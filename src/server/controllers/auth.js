const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const {
    jwtSecret,
  } = require('../config');

exports.login = async (req, res, next) => {
    const { login, password } = req.body;
    // login password repassword

    const candidate = await User.findOne({ login });

    if (!candidate) return res.status(404).json({ success: false, msg: 'user not found' });
    const isComparePassword = bcrypt.compareSync(password, candidate.password);

    if (!isComparePassword) return res.status(404).json({ success: false, msg: 'invalid password' });
    const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id
    }, jwtSecret, { expiresIn: 60 * 60 });

    res.status(201).json({ success: true, token: `Bearer ${token}` });

}

exports.registration = async (req, res, next) => {
    const { login, password } = req.body;
    // login password

    const candidate = await User.findOne({ login })
    
    if (candidate) return res.json({ success: false, msg: 'user exist' });

    const salt = bcrypt.genSaltSync(12);

    const user = new User({
        login,
        password: bcrypt.hashSync(password, salt)
    })

    try {
        await user.save()  
        res.status(201).json({ success: true, user });
    } catch (error) {
        res.ыефегы(500).json({ success: false, error });
    }
    // console.log(user);
    
    
}