const btn = document.querySelector('#v2');

btn.onclick = function () {
  console.log('You clicked me');
  console.log('I HOPE IT WORKS!');
};

function scream() {
  console.log('AHHHHHH');
  console.log('Stop touching me');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function () {
  alert('you clicked the h1');
};

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', () => {
  alert('clicked');
});

function twist() {
  console.log('TWIST!');
}

function shout() {
  console.log('SHOUT');
}

const tasBtn = document.querySelector('#tas');

// tasBtn.onclick = shout;

// tasBtn.onclick = twist;

tasBtn.addEventListener('click', twist);
tasBtn.addEventListener('click', shout);
