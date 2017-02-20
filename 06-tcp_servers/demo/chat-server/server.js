'use strict';

const net = require('net');
const EE = require('events');
const Client = require('./model/client.js');
const PORT = process.env.PORT || 3000;
const server = net.createServer();
const ee = new EE();

const pool = [];

ee.on('@dm', function(client, string) {
  let nickname = string.split(' ').shift().trim();
  let message = string.split(' ').slice(1).join(' ').trim();

  pool.forEach(c => {
    // console.log('client:', c.nickname);
    // console.log('nickname:', nickname);
    if (c.nickname === nickname) {
      c.socket.write(`${client.nickname}: ${message}`);
    }
  });
});

ee.on('@all', function(client, string) {
  pool.forEach( c => {
    c.socket.write(`${client.nickname}:` + string);
  });
});

ee.on('default', function(client, string) {
  client.socket.write('not a command\n');
});

server.on('connection', function(socket) {
  var client = new Client(socket);
  pool.push(client);

  socket.on('data', function(data) {
    const command = data.toString().split(' ').shift().trim();
    // remove carriage return - returns the cursor to the beginning of the same line
    // remove new line character - puts you on a new line
    // shift() returns the first item of an array and returns that
    // trim() removes whitespace from left and right side
    console.log('command:', command);

    if (command.startsWith('@')) {
      // split the command string, remove the command with a prepended "\\",
      // put the command back together to display to the user
      ee.emit(command, client, data.toString().split(' ').slice(1).join(' '));
      return;
    }

    ee.emit('default', client, data.toString());
  });
});

server.listen(PORT, function() {
  console.log('server up:', PORT);
});
