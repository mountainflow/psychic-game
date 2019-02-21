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
console.log("Computer's Guess: " + computerChoice);

// user chooses letter
document.addEventListener("keyup", userGuess);

function userGuess() {
    var theKey = event.key.toUpperCase();
    console.log("Your Guess: " + theKey);

    // compare computer to user
    if (computerChoice === theKey) {
        wins++;
        console.log("Wins: " + wins);
    } else {
        guessesLeft--;
        console.log("Guesses Left: " + guessesLeft);
    };

};







console.log("Losses: " + losses);