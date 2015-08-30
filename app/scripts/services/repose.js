'use strict';

/**
 * @ngdoc service
 * @name reposePlaygroundApp.Auth
 * @description
 * # Auth
 * Service in the reposePlaygroundApp.
 */
angular.module('reposePlaygroundApp')
  .factory('Repose', function ($http, Auth, User, $cookieStore) {
    return {
      list: function (cb) {
        var authToken = Auth.getToken();
        $http.get('/app/repose/list', {
          'Token': authToken
        }).
          success(function (data) {
            console.log('response for repose list ', data)
            return cb(data);
          }).
          error(function (err) {
            console.log('response for repose list err ', err)
            return cb(err);
          });
      }
    }
  });
