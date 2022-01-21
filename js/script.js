var start = document.getElementById("start");
var pause = document.getElementById("pause");
var restart = document.getElementById("restart");
var display = document.querySelector("#timer"); // selecionando o timer

var duration = 60 * 25; // Converter para segundos
var interval;
var timeIsRunning = false;

start.addEventListener("click", function () {
  if (!timeIsRunning) {
    timeIsRunning = true;
    interval = setInterval(() => {
      duration--;
      updateDisplayTimer();
    }, 1000);
  }
});

pause.addEventListener("click", stopTimer);

function updateDisplayTimer() {
  display.innerText = formatTimer();
}

function formatTimer() {
  var minutes = Math.floor(duration / 60);
  var seconds = duration % 60;

  var minutesZeroLeft = String(minutes).padStart(2, "0");
  var secondsZeroLeft = String(seconds).padStart(2, "0");

  return `${minutesZeroLeft}:${secondsZeroLeft}`;
}

function stopTimer() {
  clearInterval(interval);
  timeIsRunning = false;
}
