const container = document.getElementById("container");
function createDiv() {
  const containerDiv = document.createElement("div");

  containerDiv.className = "new-div";

  return containerDiv;
}

function createMultipleDivs() {
  let myDivs = [];
  let i = 0;
  const numOfDivs = 255;

  for (i; i <= numOfDivs; i++) {
    myDivs.push(createDiv());
    container.appendChild(myDivs[i]);
  }
}

createMultipleDivs();
