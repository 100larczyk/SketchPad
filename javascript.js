const container = document.getElementById("container");
const button = document.querySelector("button");

function createDiv() {
  const containerDiv = document.createElement("div");

  containerDiv.className = "new-div";
  //code below activates hovering color change
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
let myDivs = [];
let i = 0;
function createMultipleDivs() {
  for (i; i <= numbOfDivsMultiplied; i++) {
    myDivs.push(createDiv());
  }
}

button.addEventListener("click", gridSizePrompt);
function gridSizePrompt() {
  // Clear the container element
  container.innerHTML = "";
  // Reset the myDivs array
  myDivs = [];
  // Reset the counter variable
  i = 0;

  numOfDivs = prompt("How many squares per side?");
  numbOfDivsMultiplied = numOfDivs * numOfDivs - 1;
  createMultipleDivs(numbOfDivsMultiplied);

  // Append the new div elements to the container element
  myDivs.forEach((div) => container.appendChild(div));
}
