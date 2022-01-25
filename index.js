var noofdrumbtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < noofdrumbtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
  });
}

//detecting keypress
document.addEventListener("keypress", function(event) {
  makesound(event.key);
});

function makesound(key) {

  switch (key) {
    case "S":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "u":
      var audio2 = new Audio("sounds/tom-3.mp3");
      audio2.play();
      break;
    case "b":
      var audio3 = new Audio("sounds/tom-4.mp3");
      audio3.play();
      break;
    case "h":
      var audio4 = new Audio("sounds/snare.mp3");
      audio4.play();
      break;
    case "a":
      var audio5 = new Audio("sounds/kick-bass.mp3");
      audio5.play();
      break;
    case "m":
      var audio6 = new Audio("sounds/crash.mp3");
      audio6.play();
      break;
    case "B":
      var audio7 = new Audio("sounds/tom-2.mp3");
      audio7.play();
      break;
    default:
      console.log(buttonInnerHTML);

  };
}
