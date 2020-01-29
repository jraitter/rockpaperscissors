let playerWinCount = 0;
let compWinCount = 0;
let compChoice = " waiting to play";
let outcome = "no winner yet";
let outcomeElem = document.getElementById("outcome");
let computerChoiceElem = document.getElementById("computer-choice");
let playerCountElem = document.getElementById("player-count");
let computerCountElem = document.getElementById("computer-count");

function play(playerChoice) {
  console.log("player choice: ", playerChoice);
  compChoice = computerChoice();
  console.log("computer chose: ", compChoice)

  //quick answer
  if (playerChoice == compChoice) {
    // tie
    outcome = "There was a tie"
  } else

    if (playerChoice == "rock") {
      if (compChoice == "paper") {
        // computer wins 
        outcome = "You lose: paper beats rock";
        compWinCount++;
      } else {
        //player wins
        outcome = "You win: rock beats scissors";
        playerWinCount++;
      }
    } else
      if (playerChoice == "paper") {
        if (compChoice == "rock") {
          //player wins
          outcome = "You win: paper beats rock";
          playerWinCount++;
        } else {
          //computer wins
          outcome = "You lose: scissors beats paper";
          compWinCount++;
        }
      } else
        if (playerChoice == "scissors") {
          if (compChoice == "paper") {
            //player wins
            outcome = "You win: scissors beats paper";
            playerWinCount++;
          } else {
            //computer wins
            outcome = "You lose: rock beats scissors";
            compWinCount++;
          }
        }
  drawGame();
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

function drawGame() {
  outcomeElem.textContent = outcome;
  computerChoiceElem.textContent = compChoice;
  playerCountElem.textContent = playerWinCount.toString();
  computerCountElem.textContent = compWinCount.toString();
}

function numberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

drawGame();