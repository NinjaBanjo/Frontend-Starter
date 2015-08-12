import Marionette from 'backbone.marionette';

Marionette.Renderer.render = function (template, data) {
  var html;
  // Template must be compiled and in the dust cache. Recommend pre-compiling
  // and loading the templates as scripts at app start.
  template(data, function (err, out) {
    html = out;
  });
  return html;
};