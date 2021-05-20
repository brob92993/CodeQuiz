var highScore = document.querySelector("#highscore");
var reset = document.querySelector("#reset");
var back = document.querySelector("#back");


// listen for a click to clear/reset the scores
reset.addEventListener("click", function() {
 localStorage.clear();
 location.reload();   
});

var allScores = localStorage.getItem("allScores");
allScores - JSON.parse(allScores);

if (allScores !== null) {
   for (var i = 0; i < allScores.length; i++) {
       createLi.textcontent = allScores [i].initials + " " + allScores[i].score;
       highScore.appendChild(createLi);
   } 
}

back.addEventListener("click", function() {
    window.location.replace("./index.html");
});