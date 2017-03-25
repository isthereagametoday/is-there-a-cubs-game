var express = require('express')
var serveStatic = require('serve-static')
var Firebase = require('firebase');
var path = require('path');


// web app middleware
var app = express();
// var router = express.Router();
var config = {
  apiKey: process.env.cubsAPIKey,
  authDomain: process.env.cubsAuthDomain,
  databaseURL: "https://istheregametoday.firebaseio.com"
};

Firebase.initializeApp(config);

// bootstrap public/index.html
app.use(serveStatic(__dirname + '/public'))


// GET ./:date
app.get('/:date', function(req, res) {
  console.log(req.params.date);
  var date = req.params.date;
  var cubs = Firebase.database().ref('cubs/' + date);
  cubs.on('value', function(snapshot) {
    if (snapshot.exists()) {
      res.send(snapshot.val());
    }
    else {
      res.status(418).send(null);
    }
  });
});

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