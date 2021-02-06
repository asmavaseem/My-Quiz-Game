var gameState = 0;
var contestantCount;

var database;

var question, contestant, quiz;
var allContestants;
var distance = 0;

function setup(){
  canvas = createCanvas(950,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
    gameState = 1;
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}