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
        templateUrl: 'partials/home.html',
        controller: 'searchCtrl'
      }).
      when('/home/:beerid', {
        templateUrl: 'partials/details.html',
        controller: 'detailCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
