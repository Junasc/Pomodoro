var start = document.getElementById("start");
var pause = document.getElementById("pause");
var pausesh = document.getElementById("pausesh");
var pauselo = document.getElementById("pauselo");
var pomodoro = document.getElementById("pomodoro");
var display = document.querySelector("#timerSpan"); // selecionando o timer

var duration = 60 * 25; // Converter para segundos
var interval;
var timeIsRunning = false;

start.addEventListener("click", function () {
  if (!timeIsRunning) {
    timeIsRunning = true;
    interval = setInterval(() => {
      duration--;
      updateDisplayTimer();
      if(duration <= 0){
        stopTimer();
      }
    }, 10);
  }
});

pause.addEventListener("click", stopTimer);

pausesh.addEventListener("click" , shortPause);

pauselo.addEventListener("click" , longPause);

pomodoro.addEventListener("click" , pomodoroTimer);

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
  timeIsRunning = false;
  clearInterval(interval);
}

function shortPause(){
  duration = 5 * 60;
  display.innerText = formatTimer();
  stopTimer();
}
function longPause(){
  duration = 15 * 60;
  display.innerText = formatTimer();
  stopTimer();
}
function pomodoroTimer(){
  duration = 25 * 60;
  display.innerText = formatTimer();
  stopTimer();
}