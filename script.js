let box = document.getElementById("box");
let timeDisplay = document.getElementById("time");
let bestDisplay = document.getElementById("best");

let startTime;
let bestTime = null;

function showBox() {
  let delay = Math.random() * 3000 + 1000;

  setTimeout(() => {
    box.style.display = "block";
    box.style.background = "lime";
    startTime = Date.now();
  }, delay);
}

box.onclick = function () {
  let reactionTime = Date.now() - startTime;
  box.style.display = "none";

  timeDisplay.textContent = reactionTime;

  if (!bestTime || reactionTime < bestTime) {
    bestTime = reactionTime;
    bestDisplay.textContent = bestTime;
  }

  showBox();
};

showBox();
