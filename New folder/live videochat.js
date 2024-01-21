// src/components/VideoChat.js
import React, { useRef, useEffect } from 'react';

const VideoChat = () => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const peerConnection = new RTCPeerConnection();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        peerConnection.addStream(stream);
      })
      .catch((error) => console.error('Error accessing media devices: ', error));

    peerConnection.onaddstream = (event) => {
      remoteVideoRef.current.srcObject = event.stream;
    };
  }, []);

  const startStreaming = () => {
    // Implement the logic to connect to the signaling server and start streaming
  };

  return (
    <div>
      <h2>Your Video</h2>
      <video ref={localVideoRef} autoPlay muted></video>

      <h2>Remote Video</h2>
      <video ref={remoteVideoRef} autoPlay></video>

      <button onClick={startStreaming}>Start Streaming</button>
    </div>
  );
};

export default VideoChat;
