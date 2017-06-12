var Firebase = require('firebase');

const config = {
  apiKey: process.env.cubsAPIKey,
  authDomain: process.env.cubsAuthDomain,
  databaseURL: "https://istheregametoday.firebaseio.com"
};

var firebase = Firebase.initializeApp(config);

const apiUtils = {
  getDate(date) {
  	return firebase.database().ref('cubs/' + date).once('value');
	}
};

module.exports = apiUtils;
