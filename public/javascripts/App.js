requirejs.config({
    baseUrl: '/javascripts/modules',
    urlArgs: "bust=" + (new Date()).getTime()
});

// Start the main app logic.
requirejs(['Account'], function(_Account) {

    var app = new(Backbone.View.extend({
        el: window,

        initialize: function() {},

    }));

    var AppRouter = Backbone.Router.extend({
        routes: {
        }
    });
    new AppRouter();

    _Account();

    // Backbone.history.start();
});