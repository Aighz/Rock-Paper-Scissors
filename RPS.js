let playerPoints = 0;
let computerPoints = 0;
const gameBox = document.querySelector("#game");
const scoreBox = document.querySelector("#score");
const winnerBox = document.querySelector("#winner");
let winner = "";

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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    winnerBox.textContent = "";
    game(e.target.id);
  });
});

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

function game(playerSelection) {
  let computerSelection = computerPlay();
  let message = playRound(playerSelection, computerSelection);
  if (message.startsWith("You Win!")) {
    playerPoints += 1;
  } else if (message.startsWith("You Lose!")) {
    computerPoints += 1;
  }
  gameBox.textContent = `${message}`;
  scoreBox.textContent = `The score is ${playerPoints} - ${computerPoints}`;
  if (playerPoints === 5) {
    winner = "You";
  } else if (computerPoints === 5) {
    winner = "The Computer";
  } else {
    return;
  }
  winnerBox.textContent = `${winner} won the Game!`;
  computerPoints = 0;
  playerPoints = 0;
}
