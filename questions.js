var wrapper = document.querySelector("#wrapper");
var currentTime = document.querySelector("#currentTime");
var divQuestions = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var timer = document.querySelector("#start");
var ulCreate = document.createElement("ul");

var secondsLeft = 100;
var penalty = 10;
var holdInterval = 0;

var score = 0;
var questionsIndex = 0;

// Object variable for the questions with the name, options, and answer
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        options: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval (function() {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

    if (secondsLeft <= 0) {
        clearInterval();
        allDone();
        currentTime.textContent = "TIme's up!"
        }
    }, 1000);
}
render(questionsIndex);

});

