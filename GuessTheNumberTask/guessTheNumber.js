// Pick a random number from 1 to 10
let answer = Math.floor(Math.random() * 10) + 1;
let tries = 0;

function checkGuess() {
  let input = document.getElementById("guess");
  let guess = Number(input.value);
  let message = document.getElementById("message");

  if (input.value === "" || guess < 1 || guess > 10) {
    message.textContent = "Enter a number from 1 to 10.";
    return;
  }

  tries = tries + 1;

  if (guess < answer) {
    message.textContent = "Too low!";
  } else if (guess > answer) {
    message.textContent = "Too high!";
  } else {
    message.textContent = "Correct! You win!";
    input.disabled = true;
    return;
  }

  if (tries === 7) {
    message.textContent = "Game over! The number was " + answer;
    input.disabled = true;
  }
}
