// stored information
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar;

// computer picks random letters
function computerGuess() {
    return Math.floor(Math.random() * 26) + 65;
};

var computerChoice = String.fromCharCode(computerGuess());

// user chooses letter
document.addEventListener("keyup", userGuess);

function userGuess(event) {
    var theKey = event.key.toUpperCase();
    console.log("Your Guess: " + theKey);
};

var userKey = userGuess;

// compare user and computer
if (computerChoice === userKey) {
    wins++;
} else {
    guessesLeft--;
};




console.log("Computer's Guess: " + computerChoice);
console.log("Wins: " + wins);
console.log("Losses: " + losses);
console.log("Guesses Left: " + guessesLeft);