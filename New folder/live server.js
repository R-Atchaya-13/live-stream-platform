// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const webrtc = require('webrtc');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public')); // Serve your static files from the 'public' directory

io.on('connection', (socket) => {
  console.log('User connected');

  const rtc = new webrtc.RTC();

  rtc.on('data', (data) => {
    // Handle data received from the WebRTC connection
  });

  rtc.on('icecandidate', (candidate) => {
    // Handle ICE candidate
  });

  rtc.on('negotiationneeded', () => {
    // Handle negotiation needed
  });

  rtc.on('message', (message) => {
    // Handle messages from the WebRTC connection
  });

  // Handle signaling logic
  socket.on('message', (message) => {
    rtc.handleMessage(message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
