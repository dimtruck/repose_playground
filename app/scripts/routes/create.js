'use strict';

angular.module('reposePlaygroundApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/create',
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl',
        authenticate: true
      });
  });