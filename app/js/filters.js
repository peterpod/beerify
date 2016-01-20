'use strict';

/* Filters */

angular.module('Filters', [])
.filter('num', function() {
    return function(input) {
      return parseInt(input, 10);
    };
});
// .filter('checkmark', function() {
//   return function(input) {
//     return input ? '\u2713' : '\u2718';
//   };
// });
