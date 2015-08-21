import Marionette from 'backbone.marionette';
import IndexController from '../controllers/IndexController';

// Store a new instance so it's not create every time
const indexController = new IndexController;

class IndexRouter extends Marionette.AppRouter {
  constructor(...rest) {
    super(...rest)
    this.appRoute('', 'index');
    this.appRoute('/', 'index');
    this.appRoute('about', 'about');
  }
  get controller() {
    return indexController;
  }
}

export default IndexRouter;
