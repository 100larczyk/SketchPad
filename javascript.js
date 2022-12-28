const container = document.getElementById("container");
const button = document.querySelector("button");
const slider = document.querySelector(".slider-wrapper");
const btn = document.querySelector(".btn");

function createDiv() {
  const containerDiv = document.createElement("div");

  containerDiv.className = "new-div";
  //code below activates hovering color change
  containerDiv.addEventListener("mouseover", mouseoverHandler);
  function mouseoverHandler(e) {
    e.target.style.backgroundColor = "black";
    e.target.style.border = "none";
  }

  return containerDiv;
}
let userInput;
let numOfDivs;
let numbOfDivsMultiplied;
let myDivs = [];
let i = 0;
function createMultipleDivs() {
  for (i; i <= numbOfDivsMultiplied; i++) {
    myDivs.push(createDiv());
  }
}
slider.addEventListener("input", sliderInput);
function sliderInput() {
  // Clear the container element
  container.innerHTML = "";
  // Reset the myDivs array
  myDivs = [];
  // Reset the counter variable
  i = 0;
  //attribute value of slider to numOfDivs
  slider.lastElementChild.innerHTML = slider.firstElementChild.value;
  numOfDivs = slider.firstElementChild.value;

  numbOfDivsMultiplied = numOfDivs * numOfDivs;
  createMultipleDivs(numbOfDivsMultiplied);
  // Append the new div elements to the container element
  myDivs.forEach((div) => container.appendChild(div));

  const cellSize = 600 / numOfDivs;
  container.style.gridTemplateColumns = `repeat(${numOfDivs}, ${cellSize}px)`;
  container.style.gridTemplateRows = `repeat(${numOfDivs}, ${cellSize}px)`;
}
// Set the initial value of the slider to 16
slider.firstElementChild.value = 16;
// Call the sliderInput function to create the grid with 256 squares
sliderInput();

btn.addEventListener("click", () => {
  slider.firstElementChild.value = 16;
  sliderInput();
});
