var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
$(".btn").click(function(){

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  // console.log(userClickedPattern);
});

function nextSquence(){

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/"+ randomChosenColor + ".mp3");
  audio.play();


}