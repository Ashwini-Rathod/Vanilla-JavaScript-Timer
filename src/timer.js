//creating a header
const header = document.getElementById("header");
header.classList.add("header");
const title = document.createElement("h1");
title.innerHTML = "Vanilla JavaScript Timer";
header.appendChild(title);
//timer container
const main = document.getElementById("timerContainer");
const div = document.getElementById("control");
div.classList.add("abc");
//timer display
const timer = document.createElement("div");
timer.classList.add("timer");
timer.innerHTML= "00:00:00";
main.appendChild(timer);
//start
const start = document.createElement("div");
start.classList.add("startTimer", "reset");
start.innerHTML = "<input type = 'button' class = 'start' value = 'Start' onClick = 'startTimer()'>";
div.appendChild(start);
main.appendChild(div);
//pause
const pause = document.createElement("div");
pause.classList.add("pauseTimer", "reset");
pause.innerHTML = "<input type = 'button' class = 'pause' value = 'Pause' onClick = 'pauseTimer()'>";
div.appendChild(pause);
main.appendChild(div);
//reset
const reset = document.createElement("div");
reset.classList.add("resetTimer", "reset");
reset.innerHTML = "<input type = 'button' class = 'stop' value = 'Reset' onClick = 'resetTimer()'>";
div.appendChild(reset);
main.appendChild(div);
//adding live clock
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
const time = document.getElementById("currentTime");
time.classList.add("timerD");
const image = document.createElement("img");
image.src = "https://media.tenor.com/images/6e0bd718c5bdc46f1837d08c205f0784/tenor.gif";
image.classList.add("img");
const display = document.createElement("h1");
const currentText = document.createElement("h1");
function viewCurrentTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  // add a zero in front of numbers<10
  minutes = checkTime(minutes);
  seconds = checkTime(seconds); 
  // currentText.innerHTML = "Current Time";
  // currentText.classList.add("cText");
  display.innerHTML = hours + ":" + minutes + ":" + seconds;
  display.classList.add("cTime");
  t = setTimeout(function() {
    viewCurrentTime()
  }, 1000);
}  
viewCurrentTime();
time.appendChild(image);
time.appendChild(display);
main.appendChild(time);
//main working
var startButton = document.querySelector('.startTimer');
var pauseButton = document.querySelector('.pauseTimer');
var timerDisplay = document.querySelector('.timer');
var startTime;
var updatedTime;
var difference;
var timerID;
var savedTime;
var paused = 0;
var running = 0;
function startTimer(){
  if(running == 0){
    startTime = new Date().getTime();
    timerID = setInterval(getShowTime, 1000);  
    paused = 0;
    running = 1;
  }
}
function pauseTimer(){
  if (!difference){
    // timer not started.Nothing to do.
  } else if (!paused) {
    clearInterval(timerID);
    savedTime = difference;
    console.log(savedTime);
    paused = 1;
    running = 0;
  } else {
    startTimer();
  }
}
function resetTimer(){
  clearInterval(timerID);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  timerDisplay.innerHTML = 'Start Timer!';
}
function getShowTime(){
  updatedTime = new Date().getTime();

  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
    console.log(difference);
  
  } else {
    difference =  updatedTime - startTime;
  }
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds;
}
