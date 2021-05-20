var highScore = document.querySelector("#highscore");
var reset = document.querySelector("#reset");
var back = document.querySelector("#back");


// listen for a click to clear/reset the scores
reset.addEventListener("click", function() {
 localStorage.clear();
 location.reload();   
});

var scores = localStorage.getItem("scores");
scores - JSON.parse(scores);

if (scores !== null) {
   for (var i = 0; i < scores.length; i++) {
       liCreate.textcontent = scores [i].initials + " " + scores[i].score;
       highScore.appendChild(liCreate);
   } 
}

back.addEventListener("click", function() {
    window.location.replace("index.html");
});