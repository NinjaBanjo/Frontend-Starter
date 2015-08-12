require(['jquery', 'backbone', 'backbone.marionette'], function($, Backbone, Marionette) {
  var App = Marionette.Application.extend({
    initialize: function(options) {
      this.mergeOptions(options, {name: 'Potato'})
    }
  });

  var app = new App({container: '#app'});

  app.on('start', function() {
    Backbone.history.start();
  });

  module.exports = app;
});