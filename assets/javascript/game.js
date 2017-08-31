// Define variables

	var guessCount = 15
		wins = 0;

// Arrays

	


// Press any key to start game
// 	document.onkeyup = function(event) {
// 		var lettersGuessed = ["a", "s", "d"];
	
// // }

// // Generate word
// 	// Computer chooses word from array
// 	var computerWord = ["kunai", "sword", "kicking", "punches"];
	
// 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// 	document.queryselector("#word").innerHTML = html


// 	for (var i = 0; i < computerWord.length; i++) {
//         console.log(computerWord[i]);
// };


// userGuess
	// user presses a letter key
	document.onkeyup = function(event) {

	var lettersGuessed = event.key;
		console.log(lettersGuessed);

	var lettersArray = [lettersGuessed]

	var displayGuess = 
		"<p>Letter already guessed: " + (lettersGuessed) + "</p>"; 



	document.querySelector("#userGuess").innerHTML = displayGuess;
	
};


	
	// Guessed letter get stored in array
	
	// letters can only be pressed once
		// Letters get stored in lettersGuessed array

	// If userGuess matches letter in word
	// if (lettersGuessed === computerWord.length)
		// then letter replaces blank placeholder
	// If guessCount goes down by 1
		// var dfsdguessCount = -1;
		// If guessCount get to 0, then game restarts
			//guessCount back to 15
			// new computerWord


// Display
	// How to begin game
		// Show instructions: "Press any key to begin"


	// Blank word placeholders
		// lines change to letter if correct letter is chosen

	// Number of wins
		// Number of wins increases by one if correct word is guesses
		// Number of wins stays the same if incorrect

	// Number of guesses remaining


	// Letters already guessed


	// Guess current word = picture change + music

	// Press any key to reset word






<!-- <!-- <!-- 
// <div id="empty-div"></div>

// <!-- We now create a new JavaScript script. -->
// <script type="text/javascript">

//   // Inside, we latch onto the "emptyDiv" using the JavaScript ".getElementById" selector.
//   var targetDiv = document.getElementById("empty-div");

//   // We then use the JavaScript method ".innerHTML" to change the content to "Hello friends!"
//   targetDiv.innerHTML = "Hello friends!";

// </script> --> --> -->