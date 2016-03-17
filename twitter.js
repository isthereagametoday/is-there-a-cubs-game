#! /app/.heroku/node/bin/node

var Twitter = require('twitter');
var status = require('./server');
require('dotenv').config();

function tweetStatus() {
  console.log(status);
  console.log('Hello');

  var gameStatus;
  if (status.length === 1) {
    gameStatus = 'Yes at' + status.eventTime;
  } else if (status.length > 1) {
    gameStatus = 'Yes. There are actually several games today.';
  } else {
    gameStatus = 'No.';
  }

  var params = {
    status: gameStatus,
  };
  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  console.log(params);
}

tweetStatus();

process.exit();
