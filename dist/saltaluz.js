'use strict';

angular.module('pominholatest', []);
// soy gitbub
angular.module('pominholatest')
  .directive('saltaluz', function () {
    return {
      template: '<p>pava electrica</p>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
