'use strict';

angular.module('menuApp')
  .controller('MainCtrl', function ($scope, $http, mySocket) {
    $scope.awesomeThings = [];

    mySocket.on('news', function (data) {
      console.log(data);
      mySocket.emit('my other event', { my: 'data' });
    });


    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  })
  .controller('MainCtrl1', function ($scope, mySocket) {
    console.log('controller 1');
    mySocket.emit('try', 'message');

    mySocket.on('servertryback', function(socket, msg) {
      console.log(msg);
      console.log('right back');
    });
  });
