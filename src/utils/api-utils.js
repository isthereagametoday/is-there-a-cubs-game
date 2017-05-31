var Firebase = require('firebase');

const config = {
  apiKey: process.env.cubsAPIKey,
  authDomain: process.env.cubsAuthDomain,
  databaseURL: "https://istheregametoday.firebaseio.com"
};

Firebase.initializeApp(config);

const apiUtils = {
  getDate(date) {
  	return Firebase.database().ref('cubs/' + date).once('value');
	}
};

module.exports = apiUtils;
