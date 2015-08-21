import Marionette from 'backbone.marionette';
import indexTemplate from '../../../templates/index/indexTemplate.dust';

class IndexView extends Marionette.LayoutView {
  constructor(...rest) {
    super(...rest)
    this.template = indexTemplate;
  }
}

export default IndexView;