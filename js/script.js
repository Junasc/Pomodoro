var start = document.getElementById("start");
var pause = document.getElementById("pause");
var restart = document.getElementById("restart");
var display = document.querySelector("#timer"); // selecionando o timer

var duration = 60 * 25; // Converter para segundos

start.addEventListener('click', function(){
    setInterval(() => {
        duration--;
        updateDisplayTimer();
    }, 1000);
})

function updateDisplayTimer(){
    display.innerText = duration;
}