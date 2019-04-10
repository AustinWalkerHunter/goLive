var random = Math.floor(Math.random() * 26);

var guessAmount = 1;
var guessDiff = 0;
var prevGuessDiff = 0;

function guesser() {
    var guess = document.getElementById("guessInput").value;
    guessDiff = Math.abs(random - guessAmount);

    if(guess > 25 || guess < 0 || isNaN(guess)) {
        document.getElementById('hint').innerHTML = "Please insert a number between 0 and 25."
    }
    else if(guess == random) {
        if(guessAmount > 1) {
            alert("Correct! The number was " + random + "!\nIt took you " + guessAmount + " tries to guess the right number!")
        } else {
            alert("Correct! You guessed the number(" + random + ") on your first try! You should buy a lotto ticket.");
        }
        document.getElementById('hint').innerHTML = "You did it!"
    }
    else if(guess > random) {
        if(guessAmount > 1) {
            if(guessDiff > prevGuessDiff) {
                document.getElementById('hint').innerHTML = "Your guess was too high and you're getting colder."
            }
            else if(guessDiff < prevGuessDiff) {
                document.getElementById('hint').innerHTML = "Your guess was too high but you're getting warmer."
            } else {
                document.getElementById('hint').innerHTML = "Your guess was too high!"
            }
        } else {
            document.getElementById('hint').innerHTML = "Your guess was too high!"
        }
        prevGuessDiff = guessDiff;
        guessAmount++;
    } else {
        if(guessAmount > 1) {
            if(guessDiff > prevGuessDiff) {
                document.getElementById('hint').innerHTML = "Your guess was too low and you're getting colder."
            }
            else if(guessDiff < prevGuessDiff) {
                document.getElementById('hint').innerHTML = "Your guess was too low but you're getting warmer."
            } else {
                document.getElementById('hint').innerHTML = "Your guess was too low!"
            }
        } else {
            document.getElementById('hint').innerHTML = "Your guess was too low!"
        }
        prevGuessDiff = guessDiff;
        guessAmount++;
    }
}

function newGame() {
    random = Math.floor(Math.random() * 26);
    guessAmount = 1;
    guessDiff = null;
    prevGuessDiff = null;
}