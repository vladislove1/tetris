const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {
    jwtSecret,
} = require('../../config');
const { User } = require('../../models')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret

}

module.exports = passport => {
    passport.use(
        new JwtStrategy (options, async (payload, done) => {
            try {
                const user = await User.findById(payload.userId).select('login id');

                if (user) {
                    done(null, user);
                } else {
                    done(null, false)
                }
            } catch (error) {
                console.log(error);
            }
            
        })
    )
}