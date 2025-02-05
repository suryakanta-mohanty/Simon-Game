var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

function refreshPage(){
  window.location.reload();
}

$(document).keypress(function (){
  startGame();
});

$(document).click(function(){
  startGame();
});

function startGame(){
  if(!started){
    $("#level-level").text("Level " + level);
    nextSquence();
    started = true;
  }
}

$(".btn").click(function(){

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length -1);
});

function checkAnswer(currentLevel){ 
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success!!!");

    if(userClickedPattern.length === gamePattern.length){
      setTimeout(()=>{
        nextSquence();
      }, 1000);
    }

  } else{
    console.log("wrong!!");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(()=>{
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over!, Press any Key to Restart!");
    startOver();
  }
} 


function nextSquence(){
  userClickedPattern = []; // reseting the array.
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
  animatePress(randomChosenColor);
}

function playSound(name){
  var audio = new Audio("sounds/"+ name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#" + currentColor ).addClass("pressed");
  setTimeout(()=>{
    $("#"+currentColor).removeClass("pressed");
  }, 100);
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}