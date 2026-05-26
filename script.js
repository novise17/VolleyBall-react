let zones = document.querySelectorAll(".zone");
let prompt = document.getElementById("prompt");
let result = document.getElementById("result");
let timeDisplay = document.getElementById("time");
let scoreDisplay = document.getElementById("score");

let correctZone = null;
let startTime = null;
let score = 0;

function newRound() {
  zones.forEach(z => z.classList.remove("active"));
  result.textContent = "";

  let options = ["left", "middle", "right"];
  correctZone = options[Math.floor(Math.random() * options.length)];

  prompt.textContent = `DIG THE BALL: ${correctZone.toUpperCase()}`;

  setTimeout(() => {
    startTime = Date.now();

    zones.forEach(z => {
      if (z.dataset.zone === correctZone) {
        z.classList.add("active");
      }
    });
  }, Math.random() * 2000 + 800);
}

zones.forEach(zone => {
  zone.addEventListener("click", () => {
    if (!startTime) return;

    let reaction = Date.now() - startTime;
    timeDisplay.textContent = reaction;

    if (zone.dataset.zone === correctZone) {
      score++;
      result.textContent = "✅ Good read!";
    } else {
      result.textContent = "❌ Wrong direction!";
      score = Math.max(0, score - 1);
    }

    scoreDisplay.textContent = score;

    startTime = null;

    setTimeout(newRound, 1000);
  });
});

newRound();
