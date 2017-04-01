#! /app/.heroku/node/bin/node

var Twitter = require('twitter');
var axios = require('axios');
var Firebase = require('firebase');
var moment = require('moment');
var tz = require('moment-timezone');
require('dotenv').config();

var config = {
  apiKey: process.env.cubsStagingAPIKey,
  authDomain: process.env.cubsStagingAuthDomain,
  databaseURL: "https://istherecubsgame-staging.firebaseio.com"
};

Firebase.initializeApp(config);

function tweetStatus(status) {

  var params = {
    status: status,
  };

  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });


  client.post('statuses/update', params,  function(error, tweet, response){
    if(error) throw error;
  });
}

function getToday() {
  return moment().tz('America/Chicago').format().substr(0, 10);
}

var now = getToday();
var cubs = Firebase.database().ref('cubs/' + now);
var getGame = function() {
  return cubs.once('value');
};

getGame().then(function(game){
  var today = moment().tz('America/Chicago').format('dddd, MMMM Do');
  var tweetStart = 'Is There a Cubs Game Today? Today is ' + today;
  function status() {
    if (game.val() === null) {
      // return "Is this thing on?";
      return tweetStart + '. NO.';
    } else if (Array.isArray(game.val())) {
      // return "Don't mind me, just checking the mic.";
      return tweetStart + '. YES. There are actually 2 games today. One at ' + game.val()[0].eventTime + ' and one at ' +  game.val()[1].eventTime;
    } else if (!Array.isArray(game.val())) {
      // return ((game.val().eventType === 'game') ? "Testing, testing" : "One two, one two three");
      return tweetStart + ((game.val().eventType === 'game') ? '. YES AT ' + game.val().eventTime : '. WELL, There is a concert at ' + game.val().eventTime);
    }
  }

  tweetStatus(status());
  // console.log('last tweet:', now, status());
});
