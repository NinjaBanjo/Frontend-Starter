export default {
  templateDataHelper: function() {
    if (this.options.data) {
      let data = {};
      Object.keys(this.options.data).map(function(e) {
        data[e] = this.options.data[e];
      }.bind(this));
      return data;
    }
    return {};
  }
}