        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

        var losses = 0;

        var wins = 0; 

        var guessed = [];

        var guesses;

        var guessesLeft = 9;

        alert("Pick a letter!");



        document.onkeyup = function(event) {
        var userGuess = event.keyCode;
    
    for (guesses = 9; guesses > 0; ) {

        if(userGuess === randomLetter){
            wins++;
            document.getElementById("wins").innerHTML = "wins: " + wins;
        } else if (guesses === 0) {
            losses++;
            document.getElementById("losses").innerHTML = "losses: " + losses;
            } else {
                prompt("Pick a letter!");
                guesses--;
                document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
            }
                
                function myFunction() {
                guessed.push(userGuess);
                }  
 
            }
        }

// var html =
//           "<h1>Psychic game" + "</h1>" +
//           "<p>You chose: " + userGuess + "</p>" +
//           "<p>The computer chose: " + computerGuess + "</p>" +
//           "<p>wins: " + wins + "</p>" +
//           "<p>losses: " + losses + "</p>" +
//           "<p>Guesses Left: " + guessesLeft + "</p>" +
//           "<p>Your guesses so far: " + userGuess + "</p>";
        
//           // Set the inner HTML contents of the #game div to our html string
//         document.querySelector("#updates").innerHTML = html;

        var reset = function(){
      guessesLeft = 9;
      guessed = [];
    }