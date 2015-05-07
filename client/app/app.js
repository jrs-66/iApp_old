'use strict';

angular.module('menuApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'btford.socket-io'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .factory('mySocket', function (socketFactory) {
    return socketFactory();
  });
