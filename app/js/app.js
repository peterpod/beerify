'use strict';

/* App Module */

var beerify = angular.module('beerify', [
  'ngRoute',

  'Controllers',
  'Filters',
  'Services'
]);

beerify.run(function($rootScope) {
    Parse.initialize("IsRz8bEqA5zitaXPrvi8Pd2UZMxKOKiSfCizEosG", "hckGgFl5lDoKEtktpPdlX4h5Q1abI6xD9RjnpeVL");
    $rootScope.sessionUser = Parse.User.current();
 });

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
