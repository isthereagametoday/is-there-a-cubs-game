#! /app/.heroku/node/bin/node

var Twitter = require('twitter');
var dateUtils = require('./src/utils/date-utils');
var apiUtils = require('./src/utils/api-utils');

require('dotenv').config();

var config = {
  apiKey: process.env.cubsAPIKey,
  authDomain: process.env.cubsAuthDomain,
  databaseURL: "https://istheregametoday.firebaseio.com"
};

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

const today = dateUtils.getToday('', 10);
const eventStatus = apiUtils.getDate(today);

eventStatus.then(function(game){
  var tweetStart = 'Is There a Cubs Game Today? Today is ' + dateUtils.getToday('dddd, MMMM Do');
  function status() {
    if (game.val() === null) {
      return tweetStart + '. NO.';
    } else if (Array.isArray(game.val())) {
      return tweetStart + '. YES. There are actually 2 games today. One at ' + game.val()[0].eventTime + ' and one at ' +  game.val()[1].eventTime;
    } else if (!Array.isArray(game.val())) {
      return tweetStart + ((game.val().eventType === 'game') ? '. YES AT ' + game.val().eventTime : '. WELL, There is a concert at ' + game.val().eventTime);
    }
  }
  console.log('last tweet:', today, status());
  // tweetStatus(status());
});
