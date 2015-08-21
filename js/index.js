import $ from 'jquery';
import Promise from 'bluebird';
import App from './app';
import AppLayoutView from './layouts/AppLayoutView';
import ContentView from './views/ContentView';
// Load the styles
require('../less/bootstrap.less');
require('../less/app.less');

// Make jQuery available on window
window.$ = window.jQuery = $;

// Bootstrap javascript
require('bootstrap/js/collapse.js');
require('bootstrap/js/dropdown.js');

/*
 Register Routers here.
 Make sure to register to longest routes with matching beginnings first
 or you will get the wrong router from the factory
 */
App.RouterFactory.registerRouter('/', () => {
  return new Promise(resolve => {
    require(['./routers/IndexRouter'], function(IndexRouter) {
      resolve(IndexRouter);
    });
  });
});

$(() => {
  // Register pushState handler
  $(document).on('click', 'a[href^="/"]', e => {
    const href = $(e.currentTarget).attr('href');
    if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      App.RouterFactory.navigate(href, {trigger: true});

      return false;
    }
  });
  // Render and store the root view reference
  App.rootView = new AppLayoutView().render();
  // Start the App
  App.start();
})