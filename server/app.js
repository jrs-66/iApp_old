/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
//var io = require('socket.io');
var config = require('./config/environment');
// Setup server
var app = express();
var server = require('http').createServer(app);

var assert = require('assert');

var router = require('socket.io-events')();

router.on('*', function (sock, args, next) {
  console.log('try');
  var name = args.shift(), msg = args.shift();
  sock.emit('servertryback', name, msg);
});

var io = require('socket.io')(server);
io.use(router);


require('./config/express')(app);
require('./routes')(app);


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('message', function(msg){
    console.log('message: ' + msg);
  });
});

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});
//io.listen(server);



// Expose app
exports = module.exports = app;
