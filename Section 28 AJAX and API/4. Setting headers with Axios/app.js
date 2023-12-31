// const button = document.querySelector('#jokeBtn');
// const h1 = document.querySelector('#display');

// button.addEventListener('click', function () {
//   const getDadJoke = async () => {
//     try {
//       const config = { headers: { Accept: 'application/json' } };
//       const res = await axios.get('https://icanhazdadjoke.com/', config);
//       h1.innerText = res.data.joke;
//     } catch (e) {
//       console.log('Error!!!!!', e);
//     }
//   };
//   getDadJoke();
// });

const jokesUL = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement('li');
  newLI.append(jokeText);
  jokesUL.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  } catch (e) {
    return 'No Jokes are available';
  }
};
button.addEventListener('click', addNewJoke);
