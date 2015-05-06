'use strict';

angular.module('menuApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  })
  .controller('MainCtrl1', function ($scope, $http) {
    console.log('controller 1');

  });
