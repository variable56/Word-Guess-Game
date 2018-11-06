
//create array for words to guess.
var options = [
    "dementor",
    "quidditch",
    "snitch",
    "muggles",
    "rememberal",
    "dumbledore",
    "sirius",
    "basilisk",
    "hogwarts",
    "butterbeer",
    "hagrid",
    "malfoy",
    "dobby",
    "pensieve",
    "patronus",
    "gryffindor",
    "ravenclaw",
    "hufflepuff",
    "slytherin",
    "horcrux",
    "ron",
    "harry",
    "hermione",
    "hedwig",
    "azkaban",
    "dragon",
    "goblin",
    "gringotts"
];



//Computer needs to randomly select an option from the "options" array, then mask it with _ also declares initial variables

var randomNum = Math.floor(Math.random() * 28);
var hiddenOption = options[randomNum];
var guessStatus = [];
var wins = 0;
var Losses = 0;
var remGuesses = 15;
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + Losses;
document.getElementById("remguesses").innerHTML = "Guesses Remaining: " + remGuesses;

//Creates an array with all dashes the length of the selection with a for loop
for (var i = 0; i < hiddenOption.length; i++) {
    guessStatus.push("-");
}

//function that resets the game if guesses run out
function reset() {
    document.getElementById("losses").innerHTML = "Losses: " + Losses;
    userGuesses = [];
    guessStatus = [];
    randomNum = Math.floor(Math.random() * 28);
    hiddenOption = options[randomNum];
    for (var i = 0; i < hiddenOption.length; i++) {
        guessStatus.push("-");
    }
    document.getElementById("selection").innerHTML = guessStatus.join(" ");
    remGuesses = 15;
    document.getElementById("remguesses").innerHTML = "Guesses Remaining: " + remGuesses;
    document.getElementById("guesses").innerHTML = userGuesses;
    return;
}

//takes all the commas out of the guessStatus array
document.getElementById("selection").innerHTML = guessStatus.join(" ");

//there needs to be a place to display all of the user guesses and a bank of guesses displayed everytime the user makes a guess

var userGuesses = [];

document.onkeyup = function keyPress() {
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    userGuesses.push(userInput);
    document.getElementById("guesses").innerHTML = userGuesses;
    document.getElementById("welcometext").innerHTML = "";
    checkForWin(userInput);

    //each time a user makes a guess, the number of guesses left needs to decrease by 1 lose and reset if all words guessed.
    remGuesses--;
    document.getElementById("remguesses").innerHTML =
        "Guesses Remaining: " + remGuesses;
    if (remGuesses === 0) {
        alert(
            "Game Over. The deatheaters have prevailed. The word you were looking is: " +
            hiddenOption +
            "."
        );
        Losses++;
        reset();
    }

    //if the user guesses all the letters of the word within the guesses, increase the win counter by 1

    if (hiddenOption === guessStatus.join("")) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        alert("Excelsior! You won! The correct word is " + hiddenOption );
        reset();
    }


};


function checkForWin(userInput) {
    //Replace values of "-" in guessStatus every time a correct letter is guessed

    for (var i = 0; i < hiddenOption.length; i++) {
        if (hiddenOption.charAt(i) === userInput) {
            if (i !== -1) {
                guessStatus[i] = userInput;
                document.getElementById("selection").innerHTML = guessStatus.join(" ");
            }
        }
    }
}
