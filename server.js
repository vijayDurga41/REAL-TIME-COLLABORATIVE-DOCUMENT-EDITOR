// server/server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors'); // For handling CORS issues during development

const app = express();
const server = http.createServer(app);
// Configure Socket.IO for CORS
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000", // React app's URL
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 5000; // Backend runs on port 5000

// MongoDB Connection
// Replace with your MongoDB connection string
const MONGODB_URI = 'mongodb://localhost:27017/collaborative_editor'; 
// For MongoDB Atlas, it would look like:
// const MONGODB_URI = 'mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a simple Document Schema
const DocumentSchema = new mongoose.Schema({
    _id: { type: String, default: 'mainDocument' }, // We'll use a fixed ID for simplicity
    content: { type: String, default: '' },
    updatedAt: { type: Date, default: Date.now }
});
const Document = mongoose.model('Document', DocumentSchema);

app.use(cors()); // Enable CORS for Express routes
app.use(express.json()); // To parse JSON request bodies

// REST API endpoint to get the document content
app.get('/document', async (req, res) => {
    try {
        const document = await Document.findById('mainDocument');
        if (!document) {
            // Create the document if it doesn't exist
            const newDoc = new Document({ _id: 'mainDocument', content: '' });
            await newDoc.save();
            return res.json(newDoc);
        }
        res.json(document);
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Event for when a client sends document updates
    // In a real app, this would be operational transforms, not full content
    socket.on('update-document', async (newContent) => {
        try {
            const document = await Document.findByIdAndUpdate(
                'mainDocument',
                { content: newContent, updatedAt: Date.now() },
                { new: true, upsert: true } // Create if not exists, return updated doc
            );
            // Broadcast the updated content to all other connected clients
            // 'socket.broadcast.emit' sends to everyone EXCEPT the sender
            socket.broadcast.emit('document-updated', document.content);
            console.log('Document updated and broadcasted.');
        } catch (error) {
            console.error('Error updating document:', error);
            // Optionally, emit an error back to the client or sender
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});