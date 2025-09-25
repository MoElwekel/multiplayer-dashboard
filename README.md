# Real-time Scoreboard 📊

This is a simple project that demonstrates a real-time multiplayer scoreboard built with a **React** frontend and a **Node.js** backend using **Socket.IO**.

The primary goal of this project was to learn and practice the fundamentals of **WebSockets** for real-time, bi-directional communication between clients and a server.

---

## Features ✨

- **Enter Your Score:** Users can input their name and score.
- **Publish to Server:** Send the score to the backend server via a WebSocket event.
- **Live Updates:** The scoreboard updates in real-time for all connected clients whenever a new score is published.

---

## Technologies Used 🛠️

- **Frontend:**
  - React
  - Vite
  - `socket.io-client`
- **Backend:**
  - Node.js
  - `socket.io`

---

## How To Run It Locally 🚀

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1.  **Clone the repo:**
    ```sh
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    ```
2.  **Install Backend Dependencies:**
    Navigate to the server directory and run:
    ```sh
    npm install
    ```
3.  **Install Frontend Dependencies:**
    Navigate to the client/frontend directory and run:
    ```sh
    npm install
    ```
4.  **Start the Backend Server:**
    In the server directory, run:
    ```sh
    node server.js
    ```
    The server will be running on `http://localhost:3000`.

5.  **Start the React App:**
    In the client/frontend directory, run:
    ```sh
    npm run dev
    ```
    Open your browser and go to `http://localhost:5173` to see the application.
