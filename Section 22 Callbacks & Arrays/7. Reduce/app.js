// Reduce - Executes a reducer function on each element of the array. resulting on a single

//reducer function / reduce(accumulator, currentValue)

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }

// console.log(total);

// const total = prices.reduce((total, price) => {
//   return total + price;
// });

//make it an implict return

// const total = prices.reduce((total, price) => total + price);

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

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

const highestRating = movies.reduce((score, curr) => {
  if (curr.score > score.score) {
    return curr;
  }
  return score;
});

const evens = [2, 4, 6, 8];

let totalEvens = evens.reduce((sum, nums) => sum + nums, 100);

// we can add a value at the end to make it start from the number, so the above example will start at 100 and add the reduce evens array to it.
