let box = document.getElementById("box");
let startBtn = document.getElementById("startBtn");
let result = document.getElementById("result");

let timer;
let startTime;
let gameStarted = false;


// Start game
startBtn.addEventListener("click", function() {

    clearTimeout(timer);

    gameStarted = false;

    box.style.backgroundColor = "lightgray";
    box.innerText = "Wait for green...";

    result.innerText = "";

    // Random time between 2 and 5 seconds
    let randomTime = Math.floor(Math.random() * 3000) + 2000;

    timer = setTimeout(function() {

        box.style.backgroundColor = "green";
        box.innerText = "CLICK NOW!";

        gameStarted = true;

        startTime = Date.now();

    }, randomTime);

});


// Click on box
box.addEventListener("click", function() {

    // Clicked too early
    if (gameStarted == false) {

        clearTimeout(timer);

        box.style.backgroundColor = "red";
        box.innerText = "Too early!";

        result.innerText = "Too early! Please click Start again.";

        return;
    }


    // Clicked after green
    let endTime = Date.now();

    let reactionTime = endTime - startTime;

    result.innerText = "Your reaction time is " + reactionTime + " ms";

    // Check best time
    let bestTime = localStorage.getItem("bestTime");

    if (bestTime == null || reactionTime < Number(bestTime)) {

        localStorage.setItem("bestTime", reactionTime);

        result.innerText = "Your reaction time is " 
                         + reactionTime 
                         + " ms | Best Time: " 
                         + reactionTime 
                         + " ms";
    }

    // End round
    gameStarted = false;

    box.style.backgroundColor = "lightgray";
    box.innerText = "Round Over - Click Start";
});
