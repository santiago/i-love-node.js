var locomotive = require('locomotive')
  , Controller = locomotive.Controller
  , models = require('../models');

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
    console.log(models.User)
    this.res.send(data)
    
    //models.User.create(data).success(function(user) {
    //    controller.res.send(user, 201)
    //});
};

AccountController.login = function() {
};

module.exports = AccountController;
