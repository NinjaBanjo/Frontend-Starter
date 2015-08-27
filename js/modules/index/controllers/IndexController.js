import Marionette from 'backbone.marionette';
import App from 'app';
// Views
import ContentView from 'base/views/ContentView'

class IndexController extends Marionette.Controller {
  constructor(...rest) {
    super(...rest);
  }

  index() {
    App.rootView.content.show(new ContentView({
      template: require('index/templates/indexTemplate.dust'),
      data: {name: 'funTimeBob'}
    }));
  }

  about() {
    App.rootView.content.show(new ContentView({
      template: require('index/templates/aboutTemplate.dust')
    }));
  }
}

export default IndexController;