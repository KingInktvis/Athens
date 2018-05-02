const { JWT_KEY } = require('../config/keys');
const { Strategy, ExtractJwt } = require('passport-jwt');
const passport = require('passport');
const User = require('../models/user');

jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('auth'),
    secretOrKey: JWT_KEY
};

function jwtCallback(payload, done) {
    User.findById(payload.id, (err, user) => {
        if (err) return done(err, false);

        if (user) {
            return done(null, user);
        }else {
            return done(null, false);
        }
    });
}

passport.use(new Strategy(jwtOptions, jwtCallback));

module.exports = passport.authenticate(
    'jwt',
    { session: false }
);