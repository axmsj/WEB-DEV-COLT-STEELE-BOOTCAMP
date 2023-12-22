const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
  const newColor = makeRanColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const makeRanColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const total = r + g + b;
  if (total <= 100) {
    h1.style.color = 'white';
  }
  return (newColor = `rgb(${r}, ${g}, ${b})`);
};
