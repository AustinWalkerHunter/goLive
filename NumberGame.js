var random = Math.floor(Math.random() * 26);

var guessAmount = 1;

document.getElementById("guess").onclick = function() {
    var guess = document.getElementById("guessInput").value;

    if(guess==random){
        alert("Correct! The number was " + random + "!\nIt took you " + guessAmount + " tries to guess the right number!")
    }
}