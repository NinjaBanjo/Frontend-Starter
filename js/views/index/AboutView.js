import Marionette from 'backbone.marionette';
import aboutView from '../../../templates/index/aboutTemplate.dust';

class AboutView extends Marionette.LayoutView {
  constructor(...rest) {
    super(...rest);
    this.template = aboutView;
  }
}

export default AboutView;