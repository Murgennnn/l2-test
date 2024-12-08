'use strict';
const express = require('express');
const app = express();
const http = require('http');
const _server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(_server);
const fs = require("fs");

//const ServFunc = require('./scripting/server.js');
global.server = new ServFunc(io);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); //index-svg.html
});

io.on('connection', async (socket) => {
  console.log("CONECT: " + socket.id);

  //await server.addPlayer('1982352306', socket);

  socket.on("disconnect", async () => {
      //await server.disconectPlayer('1982352306');
  });
});

_server.listen(3000, async () => {
    console.log('listening on *:3000');
    server.addSpawn();
});
