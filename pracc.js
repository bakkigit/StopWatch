
let startTime;
let elapsedTime = 0;
let timerInterval;
let formattedTime = 0;

let urText = document.querySelector("#ur");
let start = document.getElementById("start");
let stop1 = document.getElementById("stop");
let reset = document.getElementById("reset");

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    formattedTime = formatTime(elapsedTime);
    console.log(formattedTime);
  }, 1000);
}

start.addEventListener("click",function(){
    startTimer();
})

stop1.addEventListener("click",function(){
    stopTimer();
})

reset.addEventListener("click",function(){
    resetTimer();
})

function stopTimer() {
  clearInterval(timerInterval);
//   console.log(timerInterval)
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  stopTimer();
  urText.textContent = "0:0:0";
}

function formatTime(time) {
  let ms = time % 1000;
  time = (time - ms) / 1000;
  let secs = time % 60;
  time = (time - secs) / 60;
  let mins = time % 60;
  let hrs = (time - mins) / 60;
  urText.textContent = hrs+":"+mins+":"+secs;
  return (
    hrs.toString().padStart(2, "0") +
    ":" +
    mins.toString().padStart(2, "0") +
    ":" +
    secs.toString().padStart(2, "0")
  );
}
