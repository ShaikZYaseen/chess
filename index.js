import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';
import { Chess } from 'chess.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

let players = { white: null, black: null };
const chess = new Chess();

io.on('connection', (socket) => {
    console.log("user connected!");

    if (!players.white) {
        players.white = socket.id;
        socket.emit("playerRole", "w");
    } else if (!players.black) {
        players.black = socket.id;
        socket.emit("playerRole", "b");
    } else {
        socket.emit("spectatorRole");
    }

    socket.on('disconnect', () => { 
        if (players.white === socket.id) {
            players.white = null;
        } else if (players.black === socket.id) {
            players.black = null;
        }
    });

    socket.on("move", (move) => {
        try {
            if (chess.turn() === "w" && players.white !== socket.id) return;
            if (chess.turn() === "b" && players.black !== socket.id) return;

            const result = chess.move(move);
            if (result) {
                io.emit("move", move);
                io.emit("boardState", chess.fen());
            } else {
                console.log("Invalid move", move);
                socket.emit("invalidMove", move);
            }
        } catch (err) {
            console.log(err);
            socket.emit("error", { message: "Invalid move", move }); 
        }
    });
});

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});
