import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

class App extends Marionette.Application {
  initialize(options) {
    this.mergeOptions(options, {name: 'Potato'})
  }
}

const app = new App();

app.on('start', function() {
  Backbone.history.start();
});

export default app;