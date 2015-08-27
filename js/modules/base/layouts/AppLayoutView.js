import Marionette from 'backbone.marionette';
import rootTemplate from 'base/templates/rootTemplate.dust';

class AppLayoutView extends Marionette.LayoutView {
  constructor(...rest) {
    super(...rest)
    this.template = rootTemplate;
    this.regionManager.addRegions({
      nav: '#nav',
      content: '#content'
    })
  }
  get el() {
    return 'body';
  }
}

export default AppLayoutView;