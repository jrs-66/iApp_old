'use strict';

angular.module('menuApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main1', {
        url: '/1',
        template: '<b>xxx </b>',
        controller: 'MainCtrl1'
      });
  });
