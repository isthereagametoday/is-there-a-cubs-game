var express = require('express')
var serveStatic = require('serve-static')
var path = require('path');

// web app middleware
var app = express();
// var router = express.Router();

// bootstrap public/index.html
app.use(serveStatic(__dirname + '/public'))

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

var url = process.env.IP || '0.0.0.0'
var port = 3000;
app.set('port', process.env.PORT || port)

var server = app.listen(app.get('port'), url, function() {
  console.log('Static server listening url %s on port %s', url, server
      .address().port);
})