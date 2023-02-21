// Code from: https://www.tutorialstonight.com/tic-tac-toe-javascript //

// Selecting all elements //

/*jshint esversion: 6 */

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const boardCell = document.querySelectorAll('.board-cell');
const turn = document.querySelector('.turn');
const scorecount1 = document.getElementById('scorecount1');
const scorecount2 = document.getElementById('scorecount2');
const result = document.querySelector('.result');
let evaluationAndRuleButtons = document.getElementsByClassName("open-feedback-form");
let closeEvaluationAndRule = document.getElementsByClassName("close-feedback-form");

var count1 = 0;
var count2 = 0;
var Player1 = "";
var Player2 = "";
var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];


//Add event listener to buttons opening the popups

for (let button of evaluationAndRuleButtons) {
    button.addEventListener("click", function () {
        let buttonSelected = this.getAttribute("id");
        openPopup(buttonSelected);
    });
}

//Add event listener to close buttons on the popups

for (let button of closeEvaluationAndRule) {
    button.addEventListener("click", function () {
        let buttonSelected = this.getAttribute("id");

        closePopup(buttonSelected);
    });
}

//Popups functions

/**
 * Open the pop up when pressing the respective button
 */
function openPopup(button) {
    if (button === "open-evaluation-form") {
        document.getElementById("main-feedback-form").style.display = "block";
    } else if (button === "open-rules-page") {
        document.getElementById("hiderule").style.display = "block";
    } 
}

/**
 * Close the pop up if close button is pressed
 */
function closePopup(button) {
    if (button === "close-feedback-form") {
        document.getElementById("main-feedback-form").style.display = "none";
    } else if (button === "close-instructions") {
        document.getElementById("hiderule").style.display = "none";
    } 
}


//Pop up message on Game board //

function openPopupGame() {
    document.getElementById("pop-up").style.display = "block";
}

window.onload = function () {
    openPopupGame();
 };


function closePopupGame(options) {
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
    startGame();
    document.getElementById("pop-up").style.display = "none";
}

// Start the game //

function startGame() {
    boardCell.forEach((cell, index) => {
        resetBoard();
        cell.addEventListener("click", handleClick.bind(null, cell, index));
    });
}

// Reset the board //

function resetBoard() {
    boardCell.forEach((cell) => {
        cell.innerHTML = "";
    });
    document.getElementById('board').removeAttribute("style", "pointer-events: none;");
}

// Click event //

function handleClick(cell, index) {
    const cellValue = cell.innerHTML;
    if (cellValue === '') {
        if (turn.innerHTML === 'Player 1') {
            cell.innerHTML = Player1;
            turn.innerHTML = 'Player 2';
            board[Math.floor(index / 3)][index % 3] = Player1;
        } else {
            cell.innerHTML = Player2;
            turn.innerHTML = 'Player 1';
            board[Math.floor(index / 3)][index % 3] = Player2;
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
            break;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== '') {
            showResult(board[0][i]);
            break;
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

    // Check for draw //

    var count = 0;
    for (i in boardCell) {
        if (boardCell[i].innerHTML) {
            count++;
        }
        if (count == 9) {
            showResult('Draw');
            return;
        }
    }

}

// Show the Results //

function showResult(symbol) {
    if (symbol === Player1) {
        result.innerHTML = 'Player 1 Win!';
        document.getElementById("board").setAttribute("style", "pointer-events: none;");
        countScore('Player1');
    } else if (symbol === Player2) {
        result.innerHTML = 'Player 2 Win!';
        document.getElementById("board").setAttribute("style", "pointer-events: none;");
        countScore('Player2');
    } else {
        result.innerHTML = 'Draw!';
    }
    result.style.display = 'flex';
    turn.innerHTML = '';
}

// Count Score for each player //

function countScore(scorecount) {
    if (scorecount === 'Player1') {
        count1 = count1 + 1;
        scorecount1.innerHTML = 'Player 1: ' + count1;
    }
    if (scorecount === 'Player2') {
        count2 = count2 + 1;
        scorecount2.innerHTML = 'Player 2: ' + count2;
    }
}


// Restart the game //

function newGame() {
    result.style.display = 'none';
    turn.innerHTML = 'Player 1';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    resetBoard();
}