var fs = require('fs')
var path = require('path')
var express = require('express')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')

var app = express()
var indexFile = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
var compiler = webpack(webpackConfig)

app.use('/assets', webpackDevMiddleware(compiler, webpackConfig.devServer))

app.get('*', function(req, res) {
  res.set('Content-Type', 'text/html');
  res.send(indexFile);
})

app.listen(3000, function() {
  console.log('Dev Server Running on 3000');
});