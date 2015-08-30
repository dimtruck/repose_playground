'use strict';

angular.module('reposePlaygroundApp')
  .directive('getStarted', function () {
    return {
      templateUrl: 'views/getStarted.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });