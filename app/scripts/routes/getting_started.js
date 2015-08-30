'use strict';

angular.module('reposePlaygroundApp')
  .config(function ($stateProvider) {
    console.log('in getting_started', $stateProvider)
    $stateProvider
      .state('getting_started', {
        url: '/getting_started',
        templateUrl: 'views/getting_started.html',
        controller: 'GettingStartedCtrl',
        authenticate: true
      });
  });