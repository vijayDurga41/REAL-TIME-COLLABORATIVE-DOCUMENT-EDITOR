# 📝 REAL-TIME COLLABORATIVE DOCUMENT EDITOR

## 🏢 Company: CODTECH IT SOLUTIONS

- 👤 **Name:** Vijay Durga  
- 🆔 **Intern ID:** CT06DL1498  
- 🌐 **Domain:** Full Stack Development  
- ⏳ **Duration:** 6 Weeks  
- 👨‍🏫 **Mentor:** Neela Santhosh Kumar  

---

## 🧠 Core Functionality

A web-based application that simulates a **real-time collaborative document editor**, allowing multiple users to view and edit the same text document **simultaneously**.

---

## 🛠️ Key Technologies Used

### 🖥️ Frontend
- **React.js** – For dynamic and responsive UI  
- **Socket.IO-client** – For real-time bidirectional communication  

### 🧑‍💻 Backend
- **Node.js**  
- **Express.js**  
- **Socket.IO** – Handles real-time WebSocket connections  

### 🗄️ Database
- **MongoDB** – Document storage  
- **Mongoose ODM** – Object Data Modeling for MongoDB  

---

## 🌟 Main Features & Highlights

- 🔄 **Real-time Synchronization:**  
  Edits made by one user are **instantly visible** to all other users connected to the same document.

- 💾 **Persistent Storage:**  
  Document content is stored in **MongoDB**, ensuring the state is preserved even if users disconnect.

- ⚡ **Dynamic UI with React:**  
  Users experience a fluid, interactive interface while typing and seeing live changes.

- 🌐 **Full-Stack Integration:**  
  Demonstrates real-time communication between a **React frontend**, **Socket.IO/Express backend**, and **MongoDB database**.

---

## ⚠️ Important Disclaimer

> ❗ **Note:** This project provides a basic framework for real-time editing and persistence.  
> However, for **production-grade collaborative editing**, advanced concurrency management algorithms are required:
>
> - **Operational Transformation (OT)**  
> - **Conflict-Free Replicated Data Types (CRDTs)**  
>
> The current implementation uses a **"last write wins"** strategy, which may cause **race conditions** or data conflicts when multiple users edit the same portion of text simultaneously.

---


*OUTPUT*:![Image](https://github.com/user-attachments/assets/5dc9d187-15d8-4133-88e5-f8fcef2645d9)
