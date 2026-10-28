let grid = document.getElementById("grid");
let scoreText = document.getElementById("score");
let startBtn = document.getElementById("startBtn");

let score = 0;
let gameTime;
let moleTime;

// Create 9 cells
for (let i = 0; i < 9; i++) {

    let cell = document.createElement("div");

    cell.classList.add("cell");

    grid.appendChild(cell);
}


// Start Game
startBtn.addEventListener("click", function() {

    score = 0;
    scoreText.innerText = score;

    startBtn.disabled = true;

    // Mole appears every 800 milliseconds
    moleTime = setInterval(function() {

        let cells = document.querySelectorAll(".cell");

        // Remove mole from all cells
        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.remove("mole");
        }

        // Select random cell
        let randomNumber = Math.floor(Math.random() * 9);

        // Show mole
        cells[randomNumber].classList.add("mole");

    }, 800);


    // Game lasts 30 seconds
    gameTime = setTimeout(function() {

        clearInterval(moleTime);

        alert("Game Over! Your score is " + score);

        startBtn.disabled = false;

    }, 30000);

});


// Event Delegation
grid.addEventListener("click", function(event) {

    if (event.target.classList.contains("mole")) {

        score++;

        scoreText.innerText = score;

        // Remove mole after clicking
        event.target.classList.remove("mole");
    }

});
