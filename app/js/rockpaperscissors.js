////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(playerMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (playerMove === (null || undefined)) {
    return getInput();
} else if (playerMove != (null || undefined)) {
return playerMove;
}
}

function getComputerMove(computerMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (computerMove === (null || undefined)) {
    return randomPlay();
} else if (computerMove != (null || undefined)) {
return computerMove;
}
}

function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove === "scissors") && (computerMove === "rock")) {
        return winner == "computer";
    } else if ((playerMove == "scissors") && (computerMove == "paper")) {
        return winner == "player";
    } else if ((playerMove === "scissors") && (computerMove === "scissors")) {
        return winner == "tie";
    } else if ((playerMove === "paper") && (computerMove === "rock")) {
        return winner == "player";
    } else if ((playerMove === "paper") && (computerMove === "paper")) {
        return winner == "tie";
    } else if ((playerMove === "paper") && (computerMove === "scissors")) {
        return winner == "computer";
    } else if ((playerMove === "scissors") && (computerMove === "paper")) {
        return winner == "player";
    } else if ((playerMove === "scissors") && (computerMove === "rock")) {
        return winner == "computer";
    } else if ((playerMove === "scissors") && (computerMove === "scissors")) {
        return winner == "tie";
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive(winner) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
while (playerWins < 6 || computerWins < 6); {
    if (winner === "player") {
        playerWins = playerWins + 1;
console.log("Player chose "+playerMove+"and "+"Computer chose "+computerMove+"."+"Winner is "+winner+"."+"Score"+"Player = "+playerWins+"; "+"Computer"+computerWins);
} else if (winner === "computer") {
    computerWins + 1;
console.log("Player chose "+playerMove+"and "+"Computer chose "+computerMove+"."+"Winner is "+winner+"."+"Score"+"Player = "+playerWins+"; "+"Computer"+computerWins);
}
}
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

playToFive();