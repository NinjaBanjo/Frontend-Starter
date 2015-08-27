import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import RouterFactory from 'factories/RouterFactory';

class App extends Marionette.Application {
  initialize(options) {
    this.mergeOptions(options, {name: 'Potato'})
  }
}

const app = new App();

app.RouterFactory = new RouterFactory();

app.on('start', () => {
  app.RouterFactory.navigate(window.location.pathname);
  Backbone.history.start({
    pushState: true,
    root: '/'
  });
});

export default app;