import Marionette from 'backbone.marionette';
import App from '../app';
// Views
import IndexView from '../views/index/IndexView';
import AboutView from '../views/index/AboutView';

class IndexController extends Marionette.Controller {
  constructor(...rest) {
    super(...rest);
  }

  index() {
    App.rootView.content.show(new IndexView());
  }

  about() {
    App.rootView.content.show(new AboutView());
  }
}

export default IndexController;