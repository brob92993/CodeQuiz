var wrapper = document.querySelector("#wrapper");
var currentTime = document.querySelector("#currentTime");
var divQuestions = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var timer = document.querySelector("#start");

var ulCreate = document.createElement("ul");

var timeLeft = 100;
var penalty = 10;
var holdInterval = 0;

var score = 0;
var questionIndex = 0;

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
// function to show the timer; notifies that time is up when there is no time left
timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval (function() {
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

    if (timeLeft <= 0) {
        clearInterval();
        allDone();
        currentTime.textContent = "TIme's up!"
        }
    }, 1000);
}
render(questionIndex);

});

function render(questionIndex) {
    // Clears existing content inside the questions div and the created list 
    divQuestions.innerHTML = "";
    ulCreate.innerHTML = "";

    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // for each question, only show the question itself first, followed by the choices to pick from
        var userQuestion = questions[questionIndex].title;
        var userOptions = questions[questionIndex].options;
        divQuestions.textContent = userQuestion; // the content of the questions div will be the question title
    }

    // for each function for each question
    userOptions.forEach(function (newItem) {
        var liCreate = document.createElement("li");
        liCreate.textContent = newItem;
        questionsDiv.appendChild(ulCreate); //attach the unordered list below the questions div
        ulCreate.appendChild(liCreate); 
        liCreate.addEventListener("click", (compare)); // when an list option is clicked, compare that option to the answer
    })
}

// this will compare the clicked li from the function above, with the answers
function compare(event) {
   var selection = event.target;
   
   if (selection.matches("li")) {

    var divCreate = document.createElement ("div");
    divCreate.setAttribute("id", "divCreate");
   }
}

