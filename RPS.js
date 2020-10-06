function Computerplay() {
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
