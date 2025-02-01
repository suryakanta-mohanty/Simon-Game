var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSquence(){

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/"+ randomChosenColor + ".mp3");
  audio.play();
}