var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function (){
  if(!started){
    $("#level-level").text("Level " + level);
    nextSquence();
    started = true;
  }
});

$(".btn").click(function(){

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

function nextSquence(){
  level++;
  $("#level-title").text("Level " + level);
  
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
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