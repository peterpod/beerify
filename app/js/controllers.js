'use strict';

/* Controllers */

var Controllers = angular.module('Controllers', []);

Controllers.controller('searchCtrl', 
  function($scope, $http, $rootScope) {

    $scope.search = "Raging Bitch";
    $scope.beers = " ";

    $scope.fetch = function(){
      var query = "https://api.brewerydb.com/v2/search?q=" + $scope.search + "&type=beer&key=1c42d0e40968577abeb1cbe8b8ee9d67&format=json";
      $http.get(query)
      .then(function(response){ 
        $scope.beers = response.data; 

        $scope.$applyAsync();
        return $scope.beers;  
      });
    }

    $scope.logout = function(){
      Parse.User.logout();
    }
})
.controller('detailCtrl', function($scope, $http, $routeParams){
  var query = "https://api.brewerydb.com/v2/beer/" + $routeParams.beerid + "?withBreweries=Y&withIngredients=Y&key=1c42d0e40968577abeb1cbe8b8ee9d67&format=json";
  $http.get(query)
  .then(function(response){ 
    $scope.beer = response.data.data; 
    console.log($scope.beer);

    $scope.$applyAsync();
    return $scope.beers;  
  });

  $scope.back = function() {
    window.history.back();
  };

  $scope.favorite = function(){
    var ParseFavorites = Parse.Object.extend("favorites");
    var favorites = new ParseFavorites();
    var currentUser = Parse.User.current();
    var username = currentUser.get("username");
    /* check if this user already has this favorite */
    favorites.set("name", $scope.beer.name);
    favorites.set("user_id", Parse.User.current());
    favorites.save(null, {
        success: function(favorite){
            console.log('Favorite beer has been saved: ' + favorite);
        },
        error: function(favorite, error){
            alert('Failed to save favorite: ' + error.message);
        }
    });
  }
  
}).controller('LoginCtrl', function ($scope, $window, $rootScope) {
  // Form data for the login modal
  $scope.data = {};
    

  $scope.signupEmail = function(){
      //Create a new user on Parse
      var user = new Parse.User();
      user.set("username", $scope.data.username);
      user.set("password", $scope.data.password);
      user.set("email", $scope.data.email);
     
     
      user.signUp(null, {
        success: function(user) {
          console.log("Success! You have now signed up.");
          var currentUser = Parse.User.current();
          var username = currentUser.get("username");
          $rootScope.user = username;
          alert("Hello " + username + ", we have successfully created your account.");
          $window.location.href = 'index.html';
        },
        error: function(user, error) {
          alert(JSON.stringify(user) + JSON.stringify(error) + "We were unable to create your account. Please try again");
        }
      });
     
    };
 
  $scope.loginEmail = function(){
      Parse.User.logIn($scope.data.username.toLowerCase(), $scope.data.password, {
        success: function(user) {
          console.log("Success! You have now logged in.");
          $window.location.href = 'index.html';
          $rootScope.user = Parse.User.current();
        },
        error: function(user, error) {
          // The login failed. Check error to see why.
          alert(JSON.stringify(user)+ "You've provided the wrong credentials! Please try again.");
        }
      });
    };
});