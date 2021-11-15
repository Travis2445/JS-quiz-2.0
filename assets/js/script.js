//TODO fix timer so that once buttoo is clicked it only starts once
// WANTS create an array of btn class names, btn-primary, btn-dark, and randomly apply them on click or start up.

// declare the score variable
let score = 0;

// declare totalTimePassed variable and set it too 0
let totalTimePassed = 0;

// array of questions to be asked
let questionsArr = [
    {
        "question": "What is 2 + 2?",
        "choices": ["1", "2"],
        "answer": "2"
    },
    {
        "question": "What is 3-2?",
        "choices": ["4", "1"],
        "answer": "1"
    },
    {
        "question": "What is 5 + 5?",
        "choices": ["10", "15"],
        "answer": "10"
    },
    {
        "question": "Select the color Green!",
        "choices": ["red", "green"],
        "answer": "green"
    },
    {
        "question": "Select the color Blue!",
        "choices": ["blue", "green"],
        "answer": "blue"
    },
    {
        "question": "Select the color Orange!",
        "choices": ["yellow", "orange"],
        "answer": "orange"
    }
];

// Fisher-Yates shuffle function
function shuffle(arr) {
    var m = arr.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
  
    return arr;
}

function timer() {
    var start = Date.now();

    setInterval(function(){
        var delta = Date.now() - start;
        
        document.querySelector("#time-display").innerHTML = 'Timer ' + Math.floor(delta / 1000);
    },1000);

}

// listen for button click and then run startGame()
document.querySelector("#btn-play-main").addEventListener("click", function() {
    startGame();
    timer();
});

// listen for score click and then run showScores()
document.querySelector("#btn-score-main").addEventListener("click", function() {
    showScores();
});

// game logic
function startGame() {
    console.log("startGame() initiated!")
}

// view scores logic
function showScores() {
    console.log("showScores() Initiated!")
}











shuffle(questionsArr);
console.log(questionsArr);