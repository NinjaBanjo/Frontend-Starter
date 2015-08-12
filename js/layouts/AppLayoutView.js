import Marionette from 'backbone.marionette';
import rootTemplate from '../../templates/rootTemplate.dust';

export default Marionette.LayoutView.extend({
  el: 'body',
  template: rootTemplate,
  regions: {
    nav: '#nav',
    content: '#content'
  }
});