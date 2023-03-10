const container = document.getElementById("container");
const slider = document.querySelector(".slider-wrapper");
const reset = document.querySelector(".reset");
const rgb = document.querySelector(".rgb");
const black = document.querySelector(".black");
const chooseColor = document.querySelector("#color");

function createDiv() {
  const containerDiv = document.createElement("div");

  containerDiv.className = "new-div";
  //code below activates hovering color change
  containerDiv.addEventListener("mouseover", mouseoverHandler);

  return containerDiv;
}

// makes tiles change color while mouseover
function mouseoverHandler(e) {
  e.target.style.backgroundColor = "black";
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

//
reset.addEventListener("click", () => {
  let val = document.querySelector(".slider").value;
  let cell = container.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].style.backgroundColor = "white";
  }
});

//generates random color for cell
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

rgb.addEventListener("click", function () {
  let val = document.querySelector(".slider").value;
  let cell = container.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = getRandomColor();
    });
  }
});

black.addEventListener("click", function () {
  let val = document.querySelector(".slider").value;
  let cell = container.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
  }
});

chooseColor.addEventListener("input", function () {
  let val = document.querySelector(".slider").value;
  let newColor = document.getElementById("color").value;
  let cell = container.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = newColor;
    });
  }
});

// Set the initial value of the slider to 16
slider.firstElementChild.value = 16;
// Call the sliderInput function to create the grid with 256 squares
sliderInput();
