'use strict';

/**
 * @ngdoc directive
 * @name wrcApp.directive:checkbox
 * @description
 * # checkbox
 */
angular.module('testApp')
  .directive('saltaluz', function () {
    return {
      template: '<p>pava electrica</p>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
