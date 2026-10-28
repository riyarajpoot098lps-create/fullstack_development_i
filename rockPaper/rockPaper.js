function playGame(playerChoice) {
  let choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomNumber];

  document.getElementById("choices").textContent =
    "You chose " + playerChoice + ". Computer chose " + computerChoice + ".";

  if (playerChoice === computerChoice) {
    document.getElementById("result").textContent = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("result").textContent = "You win!";
  } else {
    document.getElementById("result").textContent = "Computer wins!";
  }
}
