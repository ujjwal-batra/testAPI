const firebase = require("firebase");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBTpx4BLliy_1hjM7uTzc8tPDhXLnwAnCw",
    authDomain: "ecelivesmatter.firebaseapp.com",
    databaseURL: "https://ecelivesmatter.firebaseio.com",
    projectId: "ecelivesmatter",
    storageBucket: "ecelivesmatter.appspot.com",
    messagingSenderId: "312643276277",
    appId: "1:312643276277:web:db1fbb8c62ad71954ee4bc"
  };

const db = firebase.initializeApp(firebaseConfig);
module.exports = db;