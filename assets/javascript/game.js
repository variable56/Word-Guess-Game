       
        //put all the necessary information for the game into an object
        var 
        options = ["dementor",
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
        ]

    

        //Computer needs to randomly select an option from the "options" array, then mask it with _

        var randomNum = Math.floor(Math.random() * 28);
        var hiddenOption = options[randomNum];
        var guessStatus = [];
        var wins = 0;
        var remGuesses = 15;
        document.getElementById("wins").innerHTML = ("Wins: " + wins);
        document.getElementById("remguesses").innerHTML = ("Guesses Remaining: " + remGuesses);

        console.log(hiddenOption);
            for (var i = 0; i < hiddenOption.length; i++) {
                guessStatus.push("-");
            }
        //takes all the commas out of the guessStatus array
        document.getElementById("selection").innerHTML = guessStatus.join(' ');

        //there needs to be a place to display all of the user guesses and a bank of answers displayed everytime the user makes a guess
        
        var userGuesses = [];

        document.onkeyup = function keyPress() {
            var userInput = String.fromCharCode(event.keyCode).
            toLowerCase(); 
            userGuesses.push(userInput);
            document.getElementById("guesses").innerHTML = userGuesses;
            document.getElementById("welcometext").innerHTML = '';

        //each time a user makes a guess, the number of guesses left needs to decrease by 1
            remGuesses--;
            document.getElementById("remguesses").innerHTML = ("Guesses Remaining: " + remGuesses);

        //Replace values of "-" in guessStatus every time a correct letter is guessed

            for (var i=0; i < hiddenOption.length; i++) {
                if (hiddenOption.charAt(i) === userInput) { 
                console.log(hiddenOption.charAt(i));
                console.log(userInput);
            
                    if (i !== -1) {
                    guessStatus[i] = userInput;
                    document.getElementById("selection").innerHTML = guessStatus.join(' '); 
                    }

                }
            }
        }
        
        //if the user guesses all the letters of the word within the guesses, increase the win counter by 1
