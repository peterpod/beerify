'use strict';

/* Controllers */

var Controllers = angular.module('Controllers', []);

Controllers.controller('searchCtrl', 
  function($scope, $http) {

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
  
}).controller('LoginCtrl', function ($scope) {
  // Form data for the login modal
  $scope.data = {};
    
  $scope.signup = function(){
    // $state.go('signup');
  }
  $scope.login = function(){
    // $state.go('signin');
  }

  $scope.signupEmail = function(){
      //Create a new user on Parse
      var user = new Parse.User();
      user.set("username", $scope.data.username);
      user.set("password", $scope.data.password);
      user.set("email", $scope.data.email);
     
     
      user.signUp(null, {
        success: function(user) {
          console.log("Success! You have now signed up.");
        },
        error: function(user, error) {
          alert("We were unable to create your account. Please try again");
        }
      });
     
    };
 
  $scope.loginEmail = function(){
      Parse.User.logIn($scope.data.username.toLowerCase(), $scope.data.password, {
        success: function(user) {
          console.log("Success! You have now logged in.");
        },
        error: function(user, error) {
          // The login failed. Check error to see why.
          alert("You've provided the wrong credentials! Please try again.");
        }
      });
    };
});