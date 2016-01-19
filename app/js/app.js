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
      when('/phones', {
        templateUrl: 'partials/phone-list.html'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
