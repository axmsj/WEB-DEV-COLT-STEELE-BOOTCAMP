const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// numbers.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
//   console.log(el);
// });

// for (let el of numbers) {
//   console.log(el);
// }

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

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});

// my own example

// const workout = [
//   {
//     day: 'Monday',
//     training: 'Chest',
//   },
//   {
//     day: 'Tuesday',
//     training: 'Back',
//   },
//   {
//     day: 'Wednesday',
//     training: 'Legs',
//   },
//   {
//     day: 'Thursday',
//     training: 'Shoulder & Arms',
//   },
//   {
//     day: 'Friday',
//     training: 'Pump day',
//   },
//   {
//     day: 'Saturday',
//     training: 'Back & Hamstrings',
//   },
//   {
//     day: 'Sunday',
//     training: 'Nothing, since it is a rest day!',
//   },
// ];

// workout.forEach(function (amTraining) {
//   console.log(
//     `Today is ${amTraining.day} and I am training ${amTraining.training}!`
//   );
// });
