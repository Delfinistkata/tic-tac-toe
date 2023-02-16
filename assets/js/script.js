// Code from: https://www.tutorialstonight.com/tic-tac-toe-javascript //

// Selecting all elements //

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const boardCell = document.querySelectorAll('.board-cell');
const turn = document.querySelector('.turn');
const result = document.querySelector('.result');

var Player1 = "";
var Player2 = "";
var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];


//Pop up message when you click on New game //

function openPopup() {
    document.getElementById("pop-up").style.display = "block";
}

window.onload = function () {
    openPopup();
}

function closePopup(options) {
    if (options === "X") {
        Player1 = "X";
        Player2 = "O";
        player1.innerHTML = 'Player 1: X';
        player2.innerHTML = 'Player 2: O';

    } else {
        Player1 = "O";
        Player2 = "X";
        player1.innerHTML = 'Player 1: O';
        player2.innerHTML = 'Player 2: X';
    }
    document.getElementById("pop-up").style.display = "none";
}

// Start the game //

function beginGame() {
    boardCell.forEach((cell, index) => {
        cell.innerHTML = "";
        cell.addEventListener("click", handleClick.bind(null, cell, index));
    });
}

// Click event //

function handleClick(cell, index) {
    const cellValue = cell.innerHTML;
    if (cellValue === '') {
        if (turn.innerHTML === 'Player 1') {
            cell.innerHTML = player1;
            turn.innerHTML = 'Player 2';
            board[Math.floor(index / 3)][index % 3] = player1;
        } else {
            cell.innerHTML = player2;
            turn.innerHTML = 'Player 1';
            board[Math.floor(index / 3)][index % 3] = player2;
        }
    }
    cell.removeEventListener('click', handleClick);
    checkWinner();
}

// Check for the Winner //

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== '') {
            showResult(board[i][0]);
            return;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== '') {
            showResult(board[0][i]);
            return;
        }
    }

    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== '') {
        showResult(board[0][0]);
        return;
    }

    if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== '') {
        showResult(board[0][2]);
        return;
    }
}

// Check for Draw //

var count = 0;
for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] != '') {
                count++;
            }
        }
    }
    if (count == 9) {
        showResult('Draw');
        return;
    }
}

// Show the Result of the game //

function showResult(symbol) {
    if (symbol === Player1) {
        result.innerHTML = 'Player 1 Win!';
        } else if (symbol === Player2) {
            result.innerHTML = 'Player 2 Win!';
        } else {
            result.innerHTML = 'Draw!';
        }
        result.style.display = 'flex';
    }

// Restart the game //

function restartGame() {
    result.style.display = 'none';
    turn.innerHTML = 'Player 1';

    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    beginGame();
}