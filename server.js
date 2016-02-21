var express = require('express');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var path = require('path');

// web app middleware
var app = express();
// console logger for server
app.use(morgan('short'));

// for serving json api (stub included below)
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());

// bootstrap public/index.html
app.use(serveStatic(__dirname + '/public'));

// server-side router
var router = express.Router();

// some doc data to serve via REST api
var events = [{
    eventDate: "2/18/2016",
    eventTime: "7:05 PM",
    eventType: "Game"
  },
  {
    eventDate: "4/7/2016",
    eventTime: "7:05 PM",
    eventType: "Game"
  },
   {
    eventDate: "4/8/2016",
    eventTime: "1:20 PM",
    eventType: "Game"
  }, 
  {
    eventDate: "4/13/2016",
    eventTime: "7:05 PM",
    eventType: "Game"
  }, 
  {
    eventDate: "4/14/2016",
    eventTime: "7:05 PM",
    eventType: "Game"
  }, 
  {
    eventDate: "4/15/2016",
    eventTime: "7:05 PM",
    eventType: "Game"
  },
  {
    eventDate: "4/17/2016",
    eventTime: "1:20 PM",
    eventType: "Game"
  },
  {
    eventDate: "4/18/2016",
    eventTime: "1:20 PM",
    eventType: "Game"
  },
  {
    eventDate: "2/21/2016",
    eventTime: "1:20 PM",
    eventType: "Game"
  },
  {
    eventDate: "2/20/2016",
    eventTime: "7:05 PM",
    eventType: "Concert"
  },
  {
    eventDate: "4/20/2016",
    eventTime: "7:05 PM",
    eventType: "Concert"
  },
];

// GET ./api/docs
router.get('/events', function(req, res) {
	res.send(events);
})

// GET ./api/doc/:id
//router.get('/events/:id', function(req, res) {
 //   res.send(_.where(docs, {
  //      id: req.params.id
   // }));
//})

app.use('/api', router);

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
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