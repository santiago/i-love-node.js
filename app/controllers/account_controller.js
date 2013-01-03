var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var AccountController = new Controller();

AccountController.new = function() {
  this.title = 'Create new User'
  this.render();
};

AccountController.create = function() {
    var controller = this;
    var data = {
        email: this.param('email'),
        password: this.param('password'),
        repassword: this.param('repassword')
    }

    var User = this.app.models.User;

    User.create(data).success(function(user) {
        controller.res.send(user, 201)
    });
};

AccountController.showLogin = function() {
    this.title = 'Please Sign in'
    this.render('login');
};

module.exports = AccountController;
