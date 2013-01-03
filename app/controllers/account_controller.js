var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var AccountController = new Controller();

AccountController.new = function() {
  this.title = 'Create new User'
  this.render();
}

module.exports = AccountController;
