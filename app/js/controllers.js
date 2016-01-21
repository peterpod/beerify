'use strict';

/* Controllers */

var Controllers = angular.module('Controllers', []);

Controllers.controller('searchCtrl', 
  function($scope, $http,$timeout) {

    $scope.search = "Yuengling";
    $scope.beers = " ";

    $scope.fetch = function(){
      var query = "https://api.brewerydb.com/v2/search?q=" + $scope.search + "&type=beer&key=1c42d0e40968577abeb1cbe8b8ee9d67&format=json";
      $http.get(query)
      .then(function(response){ 
        $scope.beers = response.data; 
        console.log(JSON.stringify($scope.beers));
        $scope.$applyAsync();
        return $scope.beers;  
      });
    }
});