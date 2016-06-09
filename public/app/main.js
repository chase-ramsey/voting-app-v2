angular.module('app', ['angular.filter'])
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
  .controller('MainCtrl', function($timeout) {
    const main = this;

    main.options = {};

    main.submitNew = {
      votes: 0
    }

    main.header = 'Welcome . . . . . to Jurassic Vote';

    main.castVote = function(choice) {
      firebase.database().ref(`/votes/${choice.$key}/votes`).set(choice.votes + 1);
    }

    main.nominate = function(newMovie) {
      $timeout(() => {
        firebase.database().ref('/votes').push(newMovie);
      })
    }

  // Firebase listeners for child data updates
    firebase.database().ref('/votes').on('child_added', function(childData) {
      $timeout(() => {
        main.options[childData.key] = childData.val();
      });
    })

    firebase.database().ref('/votes').on('child_changed', function(childData) {
      $timeout(() => {
        main.options[childData.key] = childData.val();
      });
    })

  })
