const out = document.querySelector('.out');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
const display_states = document.querySelectorAll('.state');

const states = {
  POMODORO: 'pomodoro',
  SHORT: 'short',
  LONG: 'long',
};

let pomodoro = 1500;
let short = 300;
let long = 900;
let count = 0;

let time = pomodoro;
let s, m;

let paused = true;
let state = states.POMODORO;

display();

let cd = setInterval(() => {
  if (!paused && time > 0) {
    display();
    time--;
  }
}, 1000);

function display() {
  m = Math.floor(time / 60);
  s = Math.floor(time % 60);
  if (s < 10) {
    s = "0" + s;
  }
  out.textContent = m + ":" + s;
}

start.addEventListener('click', () => {
  paused = false;
});

pause.addEventListener('click', () => {
  paused = true;
});

stop.addEventListener('click', () => {
  paused = true;
  time = 1500;
  display();
});
