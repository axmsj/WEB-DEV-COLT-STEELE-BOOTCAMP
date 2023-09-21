// const subreddits = [
//   "cringe",
//   "books",
//   "chickens",
//   "funny",
//   "pics",
//   "soccer",
//   "gunners",
// ];

// for (let i = 0; i < subreddits.length; i++) {
//   console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

// for (let subreddit of subreddits) {
//   console.log(`Visit reddit.com/r/${subreddit}`);
// }

// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let row of seatingChart) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

// for (let char of "hello world") {
//   console.log(char);
// }

//My own practice on combining these two arrays
// const workoutSplit = [
//   "Chest",
//   "Back",
//   "Shoulder & Arms",
//   "Rest day",
//   "Pump Day",
//   "Legs",
//   "No training",
// ];

// const dayOfWeek = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// const workoutSchedule = workoutSplit.map((key, index) => ({
//   [key]: dayOfWeek[index],
// }));

// console.log(workoutSchedule);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let nums of numbers) {
//   console.log(Math.pow(nums, 2));
// }

const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

// for (let person in testScores) {
//   console.log(`${person} scores ${testScores[person]} `);
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}
console.log(total / scores.length);
