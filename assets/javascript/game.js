       
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

        var randomNumber = Math.floor(Math.random() * 28);
        var hiddenOption = options[randomNumber];
        var guessStatus = [];

        console.log(hiddenOption);
            for (var i = 0; i < hiddenOption.length; i++) {
                guessStatus.push("-");
            }

        document.write(guessStatus.join(' '));

        


        //there needs to be a place to display all of the user guesses
        //each time a user makes a guess, the number of guesses left needs to decrease by 1
        //if the user guesses all the letters of the word within the guesses, increase the win counter by 1
        

