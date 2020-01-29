let playerWinCount = 0;
let compWinCount = 0;

function play(playerChoice) {
  console.log("player choice: ", playerChoice);
  let compChoice = computerChoice();
  console.log("computer chose: ", compChoice)

  //quick answer
  if (playerChoice == compChoice) {
    // tie
  }

  if (playerChoice == "rock") {
    if (compChoice == "paper") {
      // computer wins 
    } else {
      //player wins
    }
  }
  if (playerChoice == "paper") {
    if (compChoice == "rock") {
      //player wins
    } else {
      //computer wins
    }
  }
  if (playerChoice == "scissors") {
    if (compChoice == "paper") {
      //computer wins
    } else {
      //player wins
    }
  }

}

function computerChoice() {
  let randomVal = numberGenerator(1, 3);
  switch (randomVal) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      console.log("bad randome number generated")
      return "bad random"

  }
}

function numberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}