// every test whether all elements in the array pass the provided function. It returns a Boolean value.

//some similar to every, but returns true if nay of the array elements pass the function.

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77, 70];

exams.some(score => score >= 75);

// exams.every(function (score) {
//   return score >= 75;
// });

//once one exam.every() is false then its false.

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

movies.some(movie => movie.year >= 2015);
