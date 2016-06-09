angular.module('app', [])
  .config(() => {
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDDycs5gL0wt1NoQNTPRUGX6zcYWnGwhfY",
      authDomain: "voting-app-exercise.firebaseapp.com",
      databaseURL: "https://voting-app-exercise.firebaseio.com",
      storageBucket: "voting-app-exercise.appspot.com",
    };
  firebase.initializeApp(config);
  })
  .controller('MainCtrl', function() {
    const main = this;

    main.header = 'hallo welt'
  })
