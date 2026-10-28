let counter = 0;

const countDisplay = document.getElementById("count");

document.getElementById("increase").addEventListener("click", () => {
  counter++;
  countDisplay.textContent = counter;
});

document.getElementById("decrease").addEventListener("click", () => {
  counter--;
  countDisplay.textContent = counter;
});

document.getElementById("reset").addEventListener("click", () => {
  counter = 0;
  countDisplay.textContent = counter;
});
