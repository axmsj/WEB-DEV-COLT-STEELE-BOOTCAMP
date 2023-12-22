const makeRanColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
  button.addEventListener('click', colorize);
}
const h1 = document.querySelectorAll('h1');

for (h1s of h1) {
  h1s.addEventListener('click', colorize);
}

function colorize() {
  this.style.backgroundColor = makeRanColor();
  this.style.color = makeRanColor();
}
