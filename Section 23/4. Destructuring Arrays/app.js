// Destructuring
// A short clean syntax to 'unpack':
// values from arrays
// Properties form objects
//Int distant variables

const scores = [929321, 899341, 888336, 7772739, 543671, 243567];

// destructuring arrays gold is scores[0], silver is scores[1], bronze is scores[2]

// const [] = name of array (as above)
// const [gold, silver, bronze, ...everyoneElse] = scores;

// Destructuring Objects

const user = {
  email: 'harvey@gmail.com',
  password: 'sCoTt1948sMiTh',
  firstName: 'Harvey',
  lastName: 'Milk',
  born: 1930,
  died: 1978,
  bio: 'Harvey Bernad Milk was an American politician and the first openly',
  city: 'San Francisco',
  state: 'California',
};

const user2 = {
  email: 'stacy@gmail.com',
  firstName: 'Stacy',
  lastName: 'Gonzalez',
  born: 1987,
  city: 'Tulsa',
  state: 'Oklahoma',
};

// const curly brackets {}
//inside the curly braces if you want to rename the value {name:} add the : and name it

// const { firstName, lastName, email, city, bio } = user;

//this will create the variable called birthYear which is from the object user.born or object -> user -> born.
// it doesn't change the original user object just copies that born part into the new variable called birthYear

// const { born: birthYear, died: deathYear } = user;

// const { city, state, died = 'NA' } = user2;

//Destructuring Params

// function fullName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// function fullName(user) {
//   const { firstName, lastName } = user;
//   return `${firstName} ${lastName}`;
// }

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

// my practice examples on my own.

function birthYear({ born, died }) {
  return `Was born in ${born} and died ${died} `;
}

function SignIn({ email, password }) {
  return `Your username is: ${email} and your password is: ${password}`;
}

const movies = [
  {
    title: 'Amadeus',
    score: 99,
    year: 1984,
  },
  {
    title: 'Sharknado',
    score: 35,
    year: 2013,
  },
  {
    title: '13 Going On 30',
    score: 70,
    year: 2004,
  },
  {
    title: 'Stand By Me',
    score: 85,
    year: 1986,
  },
  {
    title: 'Waterworld',
    score: 62,
    year: 1996,
  },
  {
    title: 'Jingle All The Way',
    score: 71,
    year: 1996,
  },
  {
    title: 'Parasite',
    score: 95,
    year: 2010,
  },
  {
    title: 'Notting Hill',
    score: 77,
    year: 1999,
  },
  {
    title: 'Alien',
    score: 90,
    year: 1979,
  },
];

// movies.filter(movie => movie.score >= 90);

movies.filter(({ score }) => score >= 90);

// movies.map(movie => {
//   return `${movie.title} (${movie.year}) is rated ${movie.score}`;
// });

movies.map(({ title, score, year }) => {
  return `${title} (${year}) is rated ${score}`;
});
