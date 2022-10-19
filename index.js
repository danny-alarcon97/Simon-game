$("h1").click(function () {
  $("h1").css("color", "purple");
});

var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
  var randomChosenColor = buttonColors[randomNum];
  var randomNum = Math.floor(Math.random() * 4);

  gamePattern.push(randomChosenColor);
}
