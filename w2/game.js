var index;
var colors;
var atempts;
var guessed;
var answer;

function game() {
	atempts = 0;
	guessed = false;
	colors = ["red", "white", "cyan", "silver", "blue", "grey", "orange", "purple", "brown", "yellow", "maroon", "lime", "magenta"]
	index = Math.floor(Math.random()*colors.length);
	answer = colors[index];
	alert("Guessed color is " + answer);
	alert("I've guessed one of these colors: " + colors.join(", ") + ". Guess what!");
	while (!guessed) {
		atempts++;
		user_guess = prompt("what is guessed color? of these: " + colors.join(", "))
		guessed = handle_guess(user_guess);
		
	}

	function handle_guess(guess) {
		if (guess == answer) {
			alert("Bingo! you did it in " + atempts + " atempts")
			return true;
		}
		else if (colors.indexOf(guess) == -1) {
			alert("there is no such color(" + guess + ") in list available: " + colors.join(", "));
			return false;
		}
		else if (colors.indexOf(guess) < index) {
			alert("your answer's (" + guess + ") index is smaller than guessed in list (" + colors.join(", ") + ")");
			return false;
		}
		else if (colors.indexOf(guess) > index) {
			alert("your answer's (" + guess + ") index is bigger than guessed in list (" + colors.join(", ") + ")");
			return false;
		}
	}
};
