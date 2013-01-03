var passport = require('passport');

module.exports = function routes() {
  this.root('pages#main');

  this.resources('users');
  this.resources('schools');

  this.resource('account');
  this.get('/login', 'account#showLogin');
  this.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                       failureRedirect: '/login' }));
}