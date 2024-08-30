import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Message from './Message';

const socket = io('http://localhost:5000');

function App() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    // Function to handle incoming messages
    const handleMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    // Set up the socket event listener
    socket.on('message', handleMessage);

    // Clean up the socket event listener when the component unmounts
    return () => {
      socket.off('message', handleMessage);
    };
  }, []);

  const sendMessage = () => {
    if (messageText.trim()) {
      socket.emit('sendMessage', { text: messageText });
      setMessageText('');
    }
  };

  return (
    <div className="App">
      <h1>Real-Time Chat App</h1>
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} username={message.username} text={message.text} />
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
