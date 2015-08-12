import Marionette from 'backbone.marionette';
import MarionetteHelpers from '../helpers/MarionetteHelpers';

class ContentView extends Marionette.ItemView {
  constructor(...rest) {
    super(...rest)
    this.templateHelpers = MarionetteHelpers.templateDataHelper
  }
}

export default ContentView