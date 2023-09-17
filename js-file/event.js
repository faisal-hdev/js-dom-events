// Option-01 Directly set on the HTML element
// <button onclick="console.log(77);">Another button</button>

// option-02: add onclick function on the HTML element
// <button onclick="makeRed()">Make red</button>
// important we will use this
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option-03:
const makeBlueBtn = document.getElementById("make-blue");
makeBlueBtn.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option-03: Another
const makePurpleBtn = document.getElementById("make-purple");
makePurpleBtn.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option-04:
const makePinkBtn = document.getElementById("make-pink");
makePinkBtn.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option-04: Another
const makeGreenBtn = document.getElementById("make-green");
makeGreenBtn.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option-04: final
// important we will use this sometime
document
  .getElementById("make-goldenRod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenRod";
  });
