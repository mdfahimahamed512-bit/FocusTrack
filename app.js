let seconds = 0;
let timer = null;
let breaks = 0;

function updateTimer() {
  seconds++;
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  document.getElementById("timer").innerText =
    String(hrs).padStart(2, '0') + ":" +
    String(mins).padStart(2, '0') + ":" +
    String(secs).padStart(2, '0');

  document.getElementById("focusTime").innerText = Math.floor(seconds / 60);
}

function start() {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
}

function pause() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    breaks++;
    document.getElementById("breaks").innerText = breaks;
  }
}

function reset() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  breaks = 0;
  document.getElementById("timer").innerText = "00:00:00";
  document.getElementById("focusTime").innerText = "0";
  document.getElementById("breaks").innerText = "0";
}
