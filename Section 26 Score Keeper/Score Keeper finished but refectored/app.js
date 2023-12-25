const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
  name: document.querySelector('#p1Name'),
};

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display'),
  name: document.querySelector('#p2Name'),
};

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
const pName = document.querySelector('#pName');

pName.addEventListener('click', function () {
  p1.button.innerText = `+1 ${p1.name.value}`;
  p2.button.innerText = `+1 ${p2.name.value}`;
  p1.name.value = '';
  p2.name.value = '';
});

let winningScore = 3;
let isGameOver = false;

UpdateScores = (player, opponent) => {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.innerText = player.score;
  }
};

p1.button.addEventListener('click', function () {
  UpdateScores(p1, p2);
});

p2.button.addEventListener('click', function () {
  UpdateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
    p1.button.innerText = '+1 Player One';
    p2.button.innerText = '+1 Player Two';
  }
}
