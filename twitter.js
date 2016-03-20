#! /app/.heroku/node/bin/node

var Twitter = require('twitter');
var axios = require('axios');
var moment = require('moment');
var tz = require('moment-timezone');
require('dotenv').config();

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

function getGame(){
  return axios.get(process.env.CUBS_GAME_API + now);
}

getGame().then(function(res){
  var game = res.data;

  var today = moment().tz('America/Chicago').format('dddd, MMMM Do');
  var tweetStart = 'Is There a Cubs Game Today? Today is ' + today;

  var status;
  if (game.length === 1) {
    status = tweetStart + '. YES AT ' + game[0].eventTime;
  } else if (game.length > 1) {
    status = tweetStart + '. YES. There are actually several games today. Check site for details.';
  } else {
    status = tweetStart + '. NO.';
  }

  tweetStatus(status);
  console.log('last tweet:', now, status, game);
});
