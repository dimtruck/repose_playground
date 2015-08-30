'use strict';

angular.module('reposePlaygroundApp')
  .controller('CreateCtrl', function ($scope, Repose, $location) {
  $scope.errors = {};
  $scope.repose = {};

  $scope.create = function (form) {
    console.log(form);
    console.log('create');
    $scope.submitted = true;

    if (form.$valid) {
      console.log($scope.repose)
      Repose.create({
        repose: $scope.repose
      })
      .then(function(result){
        console.log('all is saved.  Redirect to building ', result);
        $location.path('/detail/' + result.repose.uuid);
      })
      .catch(function(err){
        console.log('errorzzz', err);
      })
    }
  };

});