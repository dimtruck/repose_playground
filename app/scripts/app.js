'use strict';

/**
 * @ngdoc overview
 * @name reposePlaygroundApp
 * @description
 * # reposePlaygroundApp
 *
 * Main module of the application.
    'btford.socket-io',
 */
angular
  .module('reposePlaygroundApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/login');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })
  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    console.log('auth Interceptor', $location)
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Token = $cookieStore.get('token');
        }
        console.log('request for authorization', config)
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function (response) {
        console.log('failed response', response)
        if (response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })
  .run(function ($rootScope, $location, Auth) {
    console.log('run', $location)
    $rootScope.$on('$stateChangeStart', function (event, next) {
      //check if user is logged in
      console.log('state change check', event, next)
      Auth.isLoggedInAsync(function (loggedIn) {
        console.log('we are logged in', loggedIn, next);
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        } else if (next.landing && loggedIn) {
          $location.path('/internal')
          //check if repose instances exist
        } else {
          var user = Auth.getCurrentUser();
          console.log('logged in user ', user);
          $rootScope.raxTenant = user.raxTenant;
          $rootScope.username = user.username;
        }
      });
    })
  });
