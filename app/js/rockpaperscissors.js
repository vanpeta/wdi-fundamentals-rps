////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';
var computerMove;
var playerMove;
var winner;
var move; //global

function getInput() {
    move = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
    return move;
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        move = "rock";
        return move;
    } else if (randomNumber < 0.66) {
        move = "paper";
        return move;
    } else {
        move = "scissors";
        return move;
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var playerMove = move || getInput();
    console.log("Player chose " + playerMove);
return playerMove;
}

function getComputerMove(move) {
    var computerMove = move || randomPlay();
    console.log("Computer chose " + computerMove);

return computerMove;
}

function getWinner() {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    if ((playerMove == "scissors" && computerMove == "rock") || 
    (playerMove == "paper" && computerMove == "scissors") || 
    (playerMove == "rock" && computerMove == "paper")) {
        winner = "computer";
        console.log ("Computer wins");
        return winner;
    } else if ((computerMove === "paper" && playerMove === "scissors") || 
    (computerMove === "scissors" && playerMove === "rock") || 
    (computerMove === "rock" && playerMove === "paper")) {
        winner = "player";
        console.log("Player wins");
        return winner;
    } else {
        winner = "tie";
        console.log("Tie");
        return winner;
    }
}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    console.log("Let's play Rock, Paper, Scissors");
while (playerWins < 5 && computerWins < 5) {
    var winner = getWinner();
    if (winner === "player") {
    playerWins = playerWins+1;
console.log("Score: "+"Player = "+playerWins+"; "+" Computer = "+computerWins+";");
    } else if (winner === "computer") {
    computerWins = computerWins+1;
console.log("Score: "+"Player = "+playerWins+"; "+"Computer"+computerWins);
    } else if (winner === "tie"){
        console.log("player: " + playerWins + " - computer: " + computerWins);
}
}
if (playerWins === 5) {
    console.log ("PLAYER IS THE CHAMPION");
    return [playerWins, computerWins];
} else if (computerWins === 5) {
    console.log ("COMPUTER IS THE CHAMPION");
    return [playerWins, computerWins];
}
}
playToFive();