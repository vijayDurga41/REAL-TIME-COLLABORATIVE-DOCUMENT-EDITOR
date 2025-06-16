// client/src/App.js
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './App.css'; // For basic styling

const SOCKET_SERVER_URL = 'http://localhost:5000'; // Backend URL

function App() {
    const [documentContent, setDocumentContent] = useState('');
    const socketRef = useRef(null); // Ref to hold the socket instance
    const textareaRef = useRef(null); // Ref for the textarea element

    useEffect(() => {
        // --- 1. Fetch initial document content ---
        const fetchDocument = async () => {
            try {
                const response = await fetch(`${SOCKET_SERVER_URL}/document`);
                const data = await response.json();
                setDocumentContent(data.content);
            } catch (error) {
                console.error('Error fetching document:', error);
            }
        };
        fetchDocument();

        // --- 2. Initialize Socket.IO connection ---
        socketRef.current = io(SOCKET_SERVER_URL);

        // --- 3. Listen for document updates from others ---
        socketRef.current.on('document-updated', (newContent) => {
            console.log('Received document update from server');
            setDocumentContent(newContent);
        });

        // --- 4. Cleanup on component unmount ---
        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
        };
    }, []); // Empty dependency array means this runs once on mount

    // Handle changes from the local textarea
    const handleChange = (e) => {
        const newContent = e.target.value;
        setDocumentContent(newContent); // Update local state immediately
        
        // Emit the change to the server
        // In a real OT system, you'd send an operation, not the whole content
        socketRef.current.emit('update-document', newContent);
    };

    return (
        <div className="app-container">
            <h1>Collaborative Document Editor</h1>
            <textarea
                ref={textareaRef}
                className="document-editor"
                value={documentContent}
                onChange={handleChange}
                placeholder="Start typing here..."
            />
            <p className="note">
                **Note:** This is a basic real-time example. For true collaborative editing with multiple users making simultaneous changes without conflicts, a complex algorithm like Operational Transformation (OT) or CRDTs is required, which is not implemented here.
            </p>
        </div>
    );
}

export default App;