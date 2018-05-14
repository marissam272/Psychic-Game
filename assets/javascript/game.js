// Creates an array that lists out all of the options that the  computer could use.
var computerChoices = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Creating global variables to hold the number of wins, losses. They start at 0. also a downward counter for guesses left
    var wins = 0;
    var losses = 0;
    var guessesLeft = 15;
    var guesses = 9;
    var guessedLetters = [];
    var lettersToGuess = null;


// Randomly chooses a choice from the computerChoice array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// --------------------need to allow user 9 guesses------------------------------------
var updateGuessesLeft = function(){
  document.querySelector("#guessesLeft").innerText = "Guesses Left: " + guessesLeft;
};

var updateLetterToGuess = function() {
      this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function() {
  //display the letters that the user has tried
  document.querySelector("#sofar").innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

var reset = function(){

  guessesLeft = 15;
  totalGuesses = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();
//----------------------onkeyup section----------------------------------
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  guessesLeft--;
  // Captures the key press, converts it to lowercase, and saves it to a variable.
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

  if(guessesLeft > 0){
    if(userGuess === letterToGuess){
      wins++;
      document.querySelector('#wins').innerHTML = "Wins: " + wins;
      alert("Psychic powers to the 10th power!");
      reset();
    }
  }else if(guessesLeft === 0) {
      losses++;
      document.querySelector('#losses').innerHTML = "Losses: " + losses;
      alert("Game Over");
      reset();
  }
};