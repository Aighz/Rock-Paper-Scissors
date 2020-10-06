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

let playerPlay = properCase(prompt("Rock, Paper og Scissors?"));

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
