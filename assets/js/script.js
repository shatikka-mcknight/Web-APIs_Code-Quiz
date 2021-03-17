//Start quiz with hide start quix search and start question
var startBtn = document.querySelector("#start-test");
var questions = document.querySelector("#questions");
//show question
var questionsEl = document.querySelector("#questions");
var answerChoices = new Array();
startBtn.addEventListener('click', startTest)

function startTest() {
    document.querySelector("#start-quiz").style.display = 'none';
    document.querySelector("#quiz-container").style.display = 'block';
    Quiz()
    
}


//funtion for choosing the corrcet answer
function Question(text, choices, answer) {
    this.text = text;
    this.choice = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
}

//quiz_controller keep track of the score as well as the correct anwers and amount of question

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

// function for question as well as if quiz ends or not -- funtion for correct answer

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

// funtion for if the question has ended or not
Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

//funtion for the correct answer was selected or not

Quiz.prototype.guess = function (answer) {
    this.questionIndex++;
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}

//funtion to help populate the question that will display on quiz
function showQuestion() {
    document.getElementById("questions").innerHTML = questions.text;
}
        

var questions = [
    new Question("Commonly used data types DO NOT include:", ["string", "booleans", "alerts", "numbers"], "booleans"),
    new Question("The condition in an if/else statement is enclosed within ___.", ["quotes", "curly brackets", "parentheses", "square brakets"], "curly brackets"),
    new Question("Arrays in JavaScript can be used to store ____.", ["numbers & strings", "other arrays", "booleans", "all of the above"], "booleans"),
    new Question("String values must be enclosed within ____ when beung assigned to variables", ["commas", "curly brackets", "quotes", "parenthese"], "quotes"),
    new Question("A very useful tool used during development and debugging for printing content to be debugger is:", ["JavaScript", "terminal/bash", "for loops", "console log"], "console log"),

];

var quiz = new Quiz(questions)
showQuestion ();