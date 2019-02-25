// stored information
var wins = 0;
var losses = 0;
var guessesLeft = 9;


// computer picks random letters
function computerGuess() {
    return Math.floor(Math.random() * 26) + 65;
};

var computerChoice = String.fromCharCode(computerGuess());
console.log("Computer's Guess: " + computerChoice);



// NEED TO MAKE USER GUESS BETWEEN 65 AND 90 TO ONLY SELECT LETTERS
// NEED TO MAKE IT SO NOTHING HAPPENS WHEN USER HITS THE SAME KEY MULTIPLE TIMES



// user chooses letter
document.addEventListener("keyup", userGuess);

function userGuess() {
    var theKey = event.key.toUpperCase();

    // add the user guesses to html
    var listItem = document.createElement("li");
    var t = document.createTextNode(theKey + ", ");
    listItem.appendChild(t);
    document.getElementById("guesses").appendChild(listItem);

    console.log("Your Guess: " + theKey);

    // compare computer to user
    if (computerChoice === theKey) {
        wins++;
        computerChoice = String.fromCharCode(computerGuess());
        guessesLeft = 9;
        document.getElementById("wins").textContent = "Wins: " + wins;
        document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;

        // clearing the guesses
        document.getElementById("guesses").textContent = "";

        console.log("you win");
        console.log("Wins: " + wins);
        console.log("Computer's Guess: " + computerChoice);
    } else {
        guessesLeft--;
        document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
        console.log("Guesses Left: " + guessesLeft);
    };

    if (guessesLeft === 0) {
        losses++;
        computerChoice = String.fromCharCode(computerGuess());
        guessesLeft = 9;
        document.getElementById("losses").textContent = "Losses: " + losses;
        document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;

        // clearing the guesses
        document.getElementById("guesses").textContent = "";

        console.log("you lose");
        console.log("Losses: " + losses);
        console.log("Computer's Guess: " + computerChoice);

    };

};