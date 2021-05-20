var highScore = document.querySelector("#highscore");
var reset = document.querySelector("#reset");
var back = document.querySelector("#back");


// listens for a click event to reset highscores 
reset.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// pulls the scores from local storage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// listens for a click to go back to the quiz start page
back.addEventListener("click", function () {
    window.location.replace("./index.html");
});