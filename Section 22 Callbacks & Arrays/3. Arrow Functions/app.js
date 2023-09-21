// const add = (x, y) => {
//   return x + y;
// };

const square = num => {
  return num ** 2;
};

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

//when creating a arrow function  with an empty parameter, you still need to put the parenthesis with nothing in them.

// NOTE: Ig you have one parameter or argument for an arrow function, you do not need parenthesis over that parameter.

const squareRoot = number => {
  return number ** 2;
};

// Arrow Functions "Syntactically compact alternative to a regular function expression"

const rollDie = () => Math.floor(Math.random * 6) + 1;

// example of really shorten syntax using the parenthesis as return is
// name variable = parameter => ( code for that funtion);

const add = (a, b) => a + b;

const movies = [
  {
    title: 'Amadeus',
    score: 99,
  },
  {
    title: 'Stand by me',
    score: 85,
  },
  {
    title: 'Parasite',
    score: 95,
  },
  {
    title: 'Alien',
    score: 90,
  },
];

// const newMovies = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`;
// });

const newMovies = movies.map(movie => {
  return `${movie.title} - ${movie.score / 10}`;
});
//Array methods in depth

// forEach list out arrays in objects
// map() is to create an new variable out of what you took from the array

//Arrow Function Wrap-up number 228 for reminder
