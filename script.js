let start = document.getElementById('start');
let stop = document.getElementById('stop');
let intervalId;

function randomColor() {
  const hexValue = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)];
  }
  return color;
}
let startChangingColor = function (e) {
  if (!intervalId) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
  function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
let stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);
