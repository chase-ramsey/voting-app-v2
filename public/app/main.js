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
  .controller('MainCtrl', function($scope) {
    const main = this;

    main.header = 'Welcome . . . . . to Jurassic Vote';

    main.voteNeill = function() {
      firebase.database().ref('/votes/neill').set(main.neill + 1);
    }

    main.voteGoldblum = function() {
      firebase.database().ref('/votes/goldblum').set(main.goldblum + 1);
    }

    firebase.database().ref('/votes').on('value', function(data) {
      const votes = data.val();
      console.log("data: ", data.val());
      main.neill = votes.neill;
      main.goldblum = votes.goldblum;
      $scope.$apply();
    });

  })
