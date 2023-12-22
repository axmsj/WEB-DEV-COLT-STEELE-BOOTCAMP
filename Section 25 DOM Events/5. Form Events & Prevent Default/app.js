const form = document.querySelector('#shelterForm');
const submit = document.querySelector('#submit');
const input = document.querySelector('#MyInput');
const list = document.querySelector('#cats');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const catName = input.value;
  const newLI = document.createElement('li');
  newLI.innerText = catName;
  list.append(newLI);
  list.style.listStyle = 'none';
  input.value = '';
});
