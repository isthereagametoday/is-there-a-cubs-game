var firebase = require('firebase');
require('dotenv').config();

var config = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.FIREBASE_AUTH + ".firebaseapp.com",
  databaseURL: "https://" + process.env.FIREBASE_DB + ".firebaseio.com"
};

firebase.initializeApp(config);
