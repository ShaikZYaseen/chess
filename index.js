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

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));


let players = [];
let currentPlayer = "w";


io.on('connection', (socket) => {
    console.log("user connected!");

    if(!players.white){
        players.white=socket.id;
        socket.emit("playerRole","w");
    }else if(!players.black){
        players.black=socket.id;
        socket.emit("playerRole","b");
    }else{
        socket.emit("playerRole","spectatorRole");
    }


    socket.disconnect("disconnect",()=>{
        if(players.white==socket.id){
            delete players.white;
        }else if(players.black==socket.id){
            delete players.black;
        }
    });



    socket.on("move",(move)=>{
       try{
        if(Chess.turn()==="w" && players.white!==socket.id) return;
        if(Chess.turn()==="b" && players.black!==socket.id) return;

        const result = Chess.move(move);
        if(result){
            currentPlayer = Chess.turn();
            io.emit("move",move);
            io.emit("boardState",Chess.fen());
        }else{
            console.log("Invalid move",move);
           socket.emit("invalidMove",move);
        }
       }catch(err){
           console.log(err);
           socket.emit("Invalid move",move);

        }
    });

});



app.get("/",(req,res)=>{ 
    res.render("index.ejs");
});

server.listen(8080,(req,res)=>{
    console.log("Server is running on port 8080");
})