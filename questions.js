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
        endQuiz();
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
        divQuestions.appendChild(ulCreate); //attach the unordered list below the questions div
        ulCreate.appendChild(liCreate); 
        liCreate.addEventListener("click", (compare)); // when an list option is clicked, compare that option to the answer
    })
}

// this will compare the clicked li from the function above, with the answers
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
         
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            
        } else {
            // Will take 10 seconds off the timer if the question is wrong
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
   questionIndex++;

// if you've gone through all the questions, end the quiz/ if not, continue on with questions
    if (questionIndex >= questions.length) {
    endQuiz();
    createDiv.textContent = "You've reached the end of the quiz!" + " " + "Your final score is" + score + "/" + questions.length;
    } else {
    render(questionIndex);

divQuestions.appendChild(createDiv);

}

function endQuiz() {
    divQuestions.innerHTML = "";
    currentTime.innerHTML = "";

// what the page will look like when the quiz ends

//header of the page
var h1Create = document.createElement("h1");
    h1Create.setAttribute("id", "h1Create");
    h1Create.textContent = "End of the Coding Quiz!"

    divQuestions.appendChild(h1Create); //puts the header below the questions div

// paragraph below the header
var pCreate = document.createElement("p");
    pCreate.setAttribute("id", "pCreate");

    divQuestions.appendChild(pCreate);

// Calculates the time thats left and puts the final score up
    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var p2Create = document.createElement("p");
        clearInterval(holdInterval);
        pCreate.textContent = "Your final score is: " + timeRemaining;

    divQuestions.appendChild(p2Create);
}

// section to input your initals and submit those initials for the highscore

var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    divQuestions.appendChild(createInput);

var submitCreate = document.createElement("button");
    submitCreate.setAttribute("type", "submit");
    submitCreate.setAttribute("id", "Submit");
    submitCreate.textContent = "Submit";

    divQuestions.appendChild(submitCreate);

// function to store the initials and score into local storage
submitCreate.addEventListener("click", function () {
    var initials = createInput.value;

    if (initials === null) {

        console.log("No value entered!");

    } else {
        var finalScore = {
            initials: initials,
            score: timeRemaining
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        // Travels to final page
        window.location.replace("./highScores.html");
    }
})}}
