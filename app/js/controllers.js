'use strict';

/* Controllers */

var Controllers = angular.module('Controllers', []);

Controllers.controller('searchCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.$watch('search', function() {
      fetch();
    });

    function fetch(){
      $http.get("http://api.brewerydb.com/v2/search?q=" + $scope.search + "type=beer&key=1c42d0e40968577abeb1cbe8b8ee9d67&format=json")
      .then(function(response){ 
        $scope.beers = response.data; 
      });
    }

    $scope.search = "Sherlock Holmes";

  }]);

// phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//   function($scope, $routeParams, Phone) {
//     $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//       $scope.mainImageUrl = phone.images[0];
//     });

//     $scope.setImage = function(imageUrl) {
//       $scope.mainImageUrl = imageUrl;
//     };
//   }]);
