import $ from 'jquery';

export default {
  setupUiLibs: () => {
    // Load the styles
    require('bootstrap.less');
    require('app.less');

    // Make jQuery available on window
    window.$ = window.jQuery = $;

    // Bootstrap javascript
    require('bootstrap/js/collapse.js');
    require('bootstrap/js/dropdown.js');
  }
}