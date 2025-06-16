# REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR

COMPANY:CODTECH IT SOLUTIONS

NAME:VIJAY DURGA

INTERN ID:CT06DL1498

DOMAIN:FULL STACK DEVELOPMENT

DURATION:6 WEEKS

MENTOR:NEELA SANTHOSH KUMAR

Core Functionality: A web-based application simulating a real-time collaborative document editor, where multiple users can view and edit the same text document concurrently.
Key Technologies Used:
Frontend: React.js (for dynamic and responsive UI), Socket.IO-client.
Backend: Node.js, Express.js, Socket.IO.
Database: MongoDB (with Mongoose ODM for data storage).
Main Features/Highlights:
Real-time Synchronization: Changes made by one user are immediately reflected in the document viewed by all other connected users.
Persistent Storage: Document content is saved to a MongoDB database, ensuring that the document state persists even if users disconnect.
Dynamic UI with React: Provides a responsive and interactive user interface for typing and viewing document changes.
Full-Stack Integration: Demonstrates integration between a React frontend, a Node.js/Socket.IO backend, and a MongoDB database for a complete real-time application.
Important Disclaimer: This project provides the framework for real-time communication and persistence. However, for a production-grade collaborative editor that handles simultaneous edits from multiple users without data loss or conflicts (e.g., if two users type in the exact same spot), advanced algorithms like Operational Transformation (OT) or Conflict-Free Replicated Data Types (CRDTs) are required. This specific implementation uses a simplified "last write wins" approach, which is prone to race conditions in high-concurrency scenarios.

*OUTPUT*:![Image](https://github.com/user-attachments/assets/5dc9d187-15d8-4133-88e5-f8fcef2645d9)
