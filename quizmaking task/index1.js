
let questions = [
    {
        question: "Which keyword is used to declare a variable?",
        options: ["var", "int", "string", "float"],
        answer: "var",
        explanation: "var is used to declare a variable in JavaScript."
    },

    {
        question: "Which method prints something in the console?",
        options: ["print()", "console.log()", "write()", "display()"],
        answer: "console.log()",
        explanation: "console.log() is used to print output in the console."
    },

    {
        question: "Which data type stores true or false?",
        options: ["String", "Number", "Boolean", "Array"],
        answer: "Boolean",
        explanation: "Boolean stores true or false."
    }
];


let currentQuestion = 0;
let score = 0;

let time = 30;
let timer;


let questionNumber =
    document.getElementById("questionNumber");

let scoreText =
    document.getElementById("score");

let questionText =
    document.getElementById("question");

let optionsBox =
    document.getElementById("options");

let explanation =
    document.getElementById("explanation");

let nextBtn =
    document.getElementById("nextBtn");


// TIMER

function startTimer() {

    time = 30;

    document.getElementById("timer").textContent =
        "Time: " + time;

    timer = setInterval(function() {

        time--;

        document.getElementById("timer").textContent =
            "Time: " + time;

        if (time === 0) {

            clearInterval(timer);

        }

    }, 1000);
}


// SHOW QUESTION

function showQuestion() {

    let q = questions[currentQuestion];


    questionNumber.textContent =
        "Q " + (currentQuestion + 1) +
        "/" + questions.length;


    questionText.textContent =
        q.question;


    optionsBox.innerHTML = "";

    explanation.textContent = "";


    q.options.forEach(function(option) {

        let button =
            document.createElement("button");


        button.textContent = option;


        optionsBox.appendChild(button);


        button.onclick = function() {

            if (option === q.answer) {

                score++;

                scoreText.textContent =
                    "Score: " + score;

                explanation.textContent =
                    "Correct! " + q.explanation;

            }
            else {

                explanation.textContent =
                    "Wrong! Correct answer is " +
                    q.answer +
                    ". " +
                    q.explanation;

            }

        };

    });


    startTimer();

}


// NEXT BUTTON

nextBtn.onclick = function() {

    clearInterval(timer);

    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    }
    else {

        questionText.textContent =
            "Quiz Completed!";


        optionsBox.innerHTML = "";


        explanation.textContent =
            "Your final score is " +
            score +
            "/" +
            questions.length;


        nextBtn.disabled = true;

    }

};


// START QUIZ

showQuestion();
