var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = function() {
    var User = this.models.User;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        User.find(id).success(function (user) {
            done(null, user);
        });
    });
    
    passport.use(new LocalStrategy({
            usernameField: 'email'
        },
        function(username, password, done) {
            console.log('authing...')
            User.find({ where: { email: username } }).success(function(user) {
                if (!user) {
                    return done(null, false, {
                        message: 'Incorrect username.'
                    });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
                return done(null, user);
            }).error(function(err) {
                return done(err);
            });
    }));
}