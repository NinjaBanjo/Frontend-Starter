import Marionette from 'backbone.marionette';

Marionette.Renderer.render = function (template, data) {
  var html;
  // Template is passed to us from the view
  // We pass it the data and use the callback to get the html
  template(data, function (err, out) {
    html = out;
  });
  return html;
};