var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];



document.onkeyup = function(event) {

	if (guessesLeft == 0) {
		// alert("Game Over");
		guessesSoFar= [];
		guessesLeft= 9;
		losses++;
	}
			else if (guessesLeft !== 0) {
			var userInput = String.fromCharCode(event.keyCode).toLowerCase();

			function random_letter() {

		    var chars = "abcdefghijklmnopqurstuvwxyz";

		    return chars.substr( Math.floor(Math.random() * 26), 1);
			};

			var rLetter = random_letter();


			guessesSoFar.push(userInput);

			


			if (userInput == rLetter) {
				wins++;
				guessesSoFar= [];
				guessesLeft= 9;
		}


			 
			else if (userInput !== rLetter) {
				guessesLeft--;
				
				}
				





			



			var html = "<h1>The Psychic Game</h1>" + 
			"<h2>Guess What Letter I Am Thinking Of</h2>" + 
			"<h3>Wins: " + wins + "</h3>" + 
			"<h3>Losses: " + losses + "</h3>" + 
			"<h3>Guesses Left: " + guessesLeft + "</h3>" + 
			"<h3>Your Guesses So Far: " + guessesSoFar + "</h3>";

			
			document.querySelector('#game').innerHTML = html;
		}
	
}
