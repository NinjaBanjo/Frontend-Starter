var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

var PROD = (process.env.PROD);

var config = {
  entry: {
    index: './js/index',
    vendor: ['jquery', 'backbone', 'backbone.marionette', 'dustjs', 'bluebird', resolvePath('/js/helpers/dustMarionetteHelper'), resolvePath('/less/bootstrap.less')]
  },
  output: {
    path: path.join(__dirname, '/assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    alias: {
      underscore: 'lodash',
      dustjs: 'dustjs-linkedin'
    }
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!autoprefixer!less'},
      {test: /\.handlebars/, loader: 'handlebars'},
      {test: /\.dust/, loader: 'dust-loader-complete'}
    ]
  },
  plugins: [
    new Clean(['assets']),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};

if(PROD) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
}

module.exports = config;

function resolvePath(filePath) {
  return path.join(__dirname, filePath);
}