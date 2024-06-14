# Chess Game with Socket.IO

This is a real-time chess game built using Node.js, Express, Socket.IO, and the `chess.js` library. The game allows two players to play chess in real-time, with other users able to join as spectators.

## Features

- Real-time updates using Socket.IO
- Drag-and-drop interface for moving pieces
- Spectator mode for users who join after two players have connected
- Server-side game logic using `chess.js`

## Installation

### Prerequisites

- Node.js (v14 or later recommended)
- npm (Node package manager)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/ShaikZYaseen/chess.git
cd chess


Install the dependencies:
npm install

Start the server
npm start

File structure
chess-socketio/
│
├── public/
│   ├── css/
│   │   └── styles.css        # Styles for the chessboard and pieces
│   └── js/
│       └── client.js         # Client-side JavaScript
│
├── views/
│   └── index.ejs             # Main HTML file
│
├── server.js                 # Server-side code
├── package.json              # Node.js dependencies and scripts
└── README.md                 # This file


Running the Server

npm run start

Debugging
node --inspect server.js



Development
Adding New Features
To add new features or make changes, modify the respective files in the public/js (for client-side code) and server.js (for server-side code). For example, to change how the board is rendered, you would modify the client.js file.


License
This project is licensed under the MIT License. See the LICENSE file for details.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software..

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Acknowledgements
Express
Socket.IO
Chess.js