const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', socket => {
	socket.on('message', (name, message) => {
		io.emit('messages', {name, message})
	})
});

server.listen(3002, () => console.log('server initialized'))