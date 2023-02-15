// Code from: https://www.tutorialstonight.com/tic-tac-toe-javascript //
// Selecting all elements //

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');


var Player1 = "";
var Player2 = "";

















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