const container = document.querySelector('#container'),
  text = document.querySelector('#text');

const totalTime = 7500,
  holdTime = totalTime / 5,
  breatheTime = holdTime * 2;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe in!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold!';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
