'use strict';
const express = require('express');
const app = express();
const http = require('http');
const _server = http.createServer(app);
const { Server } = require("socket.io");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

_server.listen(3000, async () => {
    console.log('listening on *:8080');
});
