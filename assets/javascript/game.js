// stored information
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = ["E"];

// computer picks random letters
function computerGuess() {
    return Math.floor(Math.random() * 26) + 65;
};

var computerChoice = String.fromCharCode(computerGuess());
console.log("Computer's Guess: " + computerChoice);



// NEED TO MAKE IT SO NOTHING HAPPENS WHEN USER HITS THE SAME KEY MULTIPLE TIMES



// user chooses letter
document.addEventListener("keyup", userGuess);

function userGuess() {
    var theKey = event.key.toUpperCase();
    if (event.keyCode >= 65 && event.keyCode <= 90) {


        var useGuess = true;
        // var n = guessesSoFar.includes(theKey);

        if (guessesSoFar.includes(theKey)) {
            userGuess = false;
        }


        // check guessesSoFar array for used keys
        // if has been used
        // useGuess = false;


        console.log("keyCode ", event.key);

        // put theKey inside guessesSoFar array




        if (useGuess === true) {


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
                alert("AWESOME!!");

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
                alert("YOU SUCK AT THIS!!");

                // clearing the guesses
                document.getElementById("guesses").textContent = "";

                console.log("you lose");
                console.log("Losses: " + losses);
                console.log("Computer's Guess: " + computerChoice);

            };
        } else {
            alert("YOU HAVE ALREADY USED THAT LETTER!!");
        };


    };



};