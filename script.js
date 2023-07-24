var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");
var read = document.querySelector("#readText");

var res = document.querySelector("#container12");

var btn = document.querySelector("#btn");

btn.addEventListener("click", changeColour);

function changeColour() {
  let redd = red.value;
  let greenn = green.value;
  let bluee = blue.value;

  let result = `rgb(${redd},${greenn},${bluee})`;

  res.style.backgroundColor = result;
  read.innerHTML = result;
}
