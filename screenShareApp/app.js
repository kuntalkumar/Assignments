const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let adminConnection = null;

// WebSocket connection handling
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        if (ws === adminConnection) {
            // Admin is not expected to send messages
            return;
        }
        
        if (adminConnection) {
            adminConnection.send(message);
        }
    });

    ws.on('close', () => {
        if (ws === adminConnection) {
            adminConnection = null;
        }
    });

    if (!adminConnection) {
        adminConnection = ws;
    }
});

// Serve static files
app.use(express.static('public'));

server.listen(5500, () => {
    console.log('Server started on port 5500');
});
