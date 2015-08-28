'use strict';

/**
 * @ngdoc function
 * @name reposePlaygroundApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the reposePlaygroundApp
 */
angular.module('reposePlaygroundApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('reposePlaygroundApp')
  .controller('ContactCtrl', function($scope) {

    $scope.engineer = {
        name: "Dani",
        currentActivity: "Fixing bugs"
    };

    $scope.activities =
    [
        "Writing code",
        "Testing code",
        "Fixing bugs",
        "Dancing"
    ];
});
