const socket = io();
const chess = new Chess();

const boardElement = document.querySelector(".chessboard");

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard=()=>{
    const board = chess.board();
    boardElement.innerHTML = "";
    board.forEach((row, rowindex) => {
        row.forEach((col, columnindex) => {
          const squareElement = document.createElement("div");
          squareElement.classList.add("square",(rowindex+columnindex)%2==0 ? "light" : "dark");
        });
    });
};

const handleMove=()=>{};

const getPieceUnicode=()=>{};