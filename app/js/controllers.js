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
  
});