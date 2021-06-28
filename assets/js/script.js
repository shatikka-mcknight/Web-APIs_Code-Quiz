
// var answerBtn = document.querySelector(".button");
var quizStart = document.querySelector("#quizStart");  
//This allow the sections to turn off an on when the Start Now button is click
var startTestBtn = document.querySelector("#startTest");
startTestBtn.addEventListener('click', startTest)


function startTest() {
    document.querySelector("#quizMain").style.display = 'none';
    document.querySelector("#quizStart").style.display = 'block';
    //randomQuestion = questions.sort(() => Math.random() - .5);
    //currentQuestionIndex = 0
    //Quiz()
    
}

//Timers set up
var timeDisplay = document.querySelector(".timerSeconds")
var secondsRemain = 60;

function setTimer() {
    var timerInterval = setInterval(function () {
        secondsRemain--;
        timeDisplay.textContent = secondsRemain;
        if (secondsRemain === 0) {
            clearInterval(timerInterval);
            endTestMessage();
        }
    }, 1000);
    
};

function endTestMessage() {

};

setTimer();

// button.onclick

//funtion for choosing the corrcet answer
// function Question(text, choices, answer) {
//     this.text = text;
//     this.choice = choices;
//     this.answer = answer;
// }


QuestionList.prototype.correctAnswer = function (choices) {
    return this.correctQuizAnswer === choices;
};
class Quiz {
//quiz_controller keep track of the score as well as the correct anwers and amount of question

constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

// function for question as well as if quiz ends or not -- funtion for correct answer

getQuestionIndex() {
    return this.questions[this.questionIndex];
}

//funtion for the correct answer was selected or not

guessAnswer(answer) {
    // if the question get a correct answer add a plus one to the score
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

// funtion for if the question has ended or not
isEnded() {
    return this.questionIndex === this.questions.length;
    }
    
};

//this will refence the var question below with new QuestionList
function QuestionList(textQuestion, choices, correctAnswer) {
    this.quizQuestion = textQuestion;
    this.choices = choices;
    this.correctQuizAnswer = correctAnswer;
};

QuestionList.prototype.isCorrectAnswer = function (choice) {
    return this.correctQuizAnswer === choice;
};

function displayQuestion() {
    if (quiz.isEnded()) {
        //if quiz has ened display the score
        showScores();
    } else {
        //show the next question
        var questionId = document.querySelector("#questions");
        questionId.innerHTML = quiz.getQuestionIndex().quizQuestion;
        //show question choices to choose from
       // var selectAnswer = document.querySelector("#answerChoice0");
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var choicesSelection = document.querySelector("#answerChoice" + i);
            choicesSelection.innerHTML = choices[i];
            guessAnswer("btnChoice" + i, choices[i]);
        }

        showProgress();

    }
};

// select answer to guest the correctAnswer
function guessAnswer(id, guessAnswer) {
    var button = document.getElementById(id);
    questionIndex = 0;
    button.onclick = function () {
        quiz.guessAnswer(guessAnswer);
        displayQuestion();

        // if (button.innerHTML === questions[questionIndex].correctAnswer) {
        //     //alert("Correct");
        //     this.questionIndex++;
        //     displayQuestion();
        // } else {
        //     //alert("Wrong!");
        //     secondsRemain -= 10;
        //     this.questionIndex++;
        //     displayQuestion();
        //         }
            }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var progressElement = document.querySelector("#progress");
    progressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
   
};

//display score at the end of quiz
function showScores() {
    var quizEndTest =
        `
    <h3>Quiz has been Completed</h3>
    <h4 id="score">You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="repeatQuiz">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;

    var quizElement = document.querySelector("#quizStart");
    quizElement.innerHTML = quizEndTest;
}

        

var questions = [
    new QuestionList(
        "Commonly used data types DO NOT include:",
        ["string", "booleans", "alerts", "numbers"],
        "booleans"),
    new QuestionList(
        "The condition in an if/else statement is enclosed within ___.",
        ["quotes", "curly brackets", "parentheses", "square brakets"],
        "curly brackets"),
    new QuestionList(
        "Arrays in JavaScript can be used to store ____.",
        ["numbers & strings", "other arrays", "booleans", "all of the above"],
        "booleans"),
    new QuestionList(
        "String values must be enclosed within ____ when beung assigned to variables",
        ["commas", "curly brackets", "quotes", "parenthese"],
        "quotes"),
    new QuestionList(
        "A very useful tool used during development and debugging for printing content to be debugger is:",
        ["JavaScript", "terminal/bash", "for loops", "console log"],
        "console log"),

];


var quiz = new Quiz(questions)
displayQuestion();