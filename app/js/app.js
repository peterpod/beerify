'use strict';

/* App Module */

var beerify = angular.module('beerify', [
  'ngRoute',

  'Controllers',
  'Filters',
  'Services'
]);

beerify.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
