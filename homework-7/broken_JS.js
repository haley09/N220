let PlayerChoice = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;

function RPS(numb) {
  let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];

  // Display the computer's choice
  document.getElementById("resultDecision").innerHTML =
    "The computer chose: " + CompDecision;

  // Player chose Rock
  if (numb === 0) {
    if (CompDecision === "Paper") {
      innerscore -= 1; // Paper beats Rock
    } else if (CompDecision === "Scissors") {
      innerscore += 1; // Rock beats Scissors
    }
  }

  // Player chose Paper
  if (numb === 1) {
    if (CompDecision === "Rock") {
      innerscore += 1; // Paper beats Rock
    } else if (CompDecision === "Scissors") {
      innerscore -= 1; // Scissors beats Paper
    }
  }

  // Player chose Scissors
  if (numb === 2) {
    if (CompDecision === "Rock") {
      innerscore -= 1; // Rock beats Scissors
    } else if (CompDecision === "Paper") {
      innerscore += 1; // Scissors beats Paper
    }
  }

  // Update the score
  document.getElementById("Score").innerHTML = "Score: " + innerscore;
}
