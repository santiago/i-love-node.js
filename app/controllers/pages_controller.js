var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.main = function() {
    if(!this.req.user) {
        this.redirect('/login');
    } else {
        this.title = 'Please Sign In'
        this.render();
    }
}

module.exports = PagesController;
