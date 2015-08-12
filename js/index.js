import App from './app';
import AppLayoutView from './layouts/AppLayoutView'
import ContentView from './views/ContentView'
import indexTemplate from '../templates/indexTemplate.dust';
// Load the styles
require('../less/bootstrap.less');
require('../less/app.less');

// Start the App
App.start();
// Render and store the root view reference
App.rootView = new AppLayoutView().render();
// Attach our contentView to the root view content area
App.rootView.content.show(new ContentView({
  template: indexTemplate
}));