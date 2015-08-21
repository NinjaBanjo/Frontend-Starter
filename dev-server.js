var fs = require('fs')
var path = require('path')
var express = require('express')

var app = express()
var indexFile = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('*', function(req, res) {
  res.set('Content-Type', 'text/html');
  res.send(indexFile);
})
app.listen(3000);