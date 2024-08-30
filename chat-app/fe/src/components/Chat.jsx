import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:5000', {
  auth: {
    token: localStorage.getItem('token'),
  },
});

const Chat = ({ token }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [roomId, setRoomId] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.off();
    };
  }, []);

  const joinRoom = async () => {
    try {
      // Get the current user's data
      const res = await axios.get('http://localhost:5000/users', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const otherUserId = prompt('Enter the other user ID to chat with:');
      const roomId = [res.data[0]._id, otherUserId].sort().join('-'); // Simple room ID generation
      setRoomId(roomId);
      socket.emit('joinRoom', roomId);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('sendMessage', { roomId, message });
      setMessage('');
    }
  };

  return (
    <div>
      <button onClick={joinRoom}>Join Chat Room</button>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}: </strong>
            {msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );}
  export default Chat;

