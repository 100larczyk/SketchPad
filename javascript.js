const container = document.getElementById("container");
const button = document.querySelector("button");

function createDiv() {
  const containerDiv = document.createElement("div");

  containerDiv.className = "new-div";

  containerDiv.addEventListener("mouseover", mouseoverHandler);
  function mouseoverHandler(e) {
    e.target.style.backgroundColor = "blue";
  }

  containerDiv.addEventListener("mouseout", mouseoutHandler);
  function mouseoutHandler(e) {
    e.target.style.backgroundColor = "red";
  }
  return containerDiv;
}

let numOfDivs;
let numbOfDivsMultiplied;
function createMultipleDivs() {
  let myDivs = [];
  let i = 0;

  for (i; i <= numbOfDivsMultiplied; i++) {
    myDivs.push(createDiv());
    container.appendChild(myDivs[i]);
  }
}
createMultipleDivs();

button.addEventListener("click", gridSizePrompt);
function gridSizePrompt(e) {
  numOfDivs = prompt("How many squares per side?");
  numbOfDivsMultiplied = numOfDivs * numOfDivs - 1;
  createMultipleDivs(numbOfDivsMultiplied);
  return;
}
