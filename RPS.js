function computerPlay() {
  let x = Math.floor(Math.random() * 3);
  if (x === 0) {
    return "Rock";
  }
  if (x === 1) {
    return "Paper";
  }
  if (x === 2) {
    return "Scissors";
  }
}

function properCase(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else if (
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Paper")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection === computerSelection) {
    return `It's a draw! Both you and the Computer played ${playerSelection}!`;
  } else {
    return `Something went wrong. Try again!`;
  }
}

function game() {
  let playerPoint = 0;
  let computerPoint = 0;
  for (i = 0; i < 5; i++) {
    let playerChoice = properCase(prompt("Rock, Paper og Scissors?"));
    let computerChoice = computerPlay();
    let message = playRound(playerChoice, computerChoice);
    if (message.startsWith("You Win!")) {
      playerPoint += 1;
    } else if (message.startsWith("You Lose!")) {
      computerPoint += 1;
    } else {
      i -= 1;
    }
    console.log(message);
  }
  let result = "";
  if (playerPoint >= 3) {
    result = "won";
  } else {
    result = "lost";
  }
  console.log(`You ${result} the Best of 5! The game ended ${playerPoint} - ${computerPoint}!`)
}
