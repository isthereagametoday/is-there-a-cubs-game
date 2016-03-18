#! /app/.heroku/node/bin/node

var Twitter = require('twitter');
var axios = require('axios');
var moment = require('moment');
var tz = require('moment-timezone');
require('dotenv').config();

function tweetStatus() {
  function getToday() {
    return moment().tz('America/Chicago').format().substr(0, 10);
  }
  
  var now = getToday();

  function getEvents() {
    return axios.get(`/api/events/${now}`);
  }
  var gameStatus = getEvents();
  
  var status = gameStatus.then(function (date) {
    var data = date.data;
    if (data.length === 1) {
      return 'Yes at' + status.eventTime;
    } else if (data.length > 1) {
      return 'Yes. There are actually several games today.';
    }
    return 'No.';
  });

  console.log('gs:', gameStatus);
  console.log("now:", now);
  console.log('Hello');
  console.log('status:', status);

  var params = {
    status: status,
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
