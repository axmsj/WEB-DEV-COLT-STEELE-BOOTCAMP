//Function Statement, what i learned first

// function add(x, y) {
//   return x + y;
// }

//Function Expression (different syntax but same as function statement)

// const add = function (x, y) {
//   return x + y;
// };

// const square = function (number) {
//   return Math.pow(number, 2);
// };

//High Order Functions

// function callBackThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// function greet() {
//   console.log('Hello');
// }

// callBackThreeTimes(greet);

// const numbers = function (loop) {
//   for (i = 1; i <= 10; i++) {
//     console.log(`I am number ${i}`);
//   }
// };

// let daysOfWeek = [
//   '',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];

// let workoutSchedule = function (userInput) {
//   if (userInput >= 1 && userInput <= 7) {
//     let index = daysOfWeek[userInput];
//     let muscles = [
//       '',
//       'Chest',
//       'Back',
//       'Legs',
//       'OFF',
//       'Shoulders & Arms',
//       'Back & Hams',
//       'OFF',
//     ];
//     console.log(`Today is ${index} and I'm training ${muscles[userInput]}`);
//   }
// };

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log('Congrats, I am a good function! You WIN!');
//     };
//   } else {
//     return function () {
//       alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!');
//       alert('STOP TRYING TO CLOSE THIS WINDOW');
//       alert('STOP TRYING TO CLOSE THIS WINDOW');
//       alert('STOP TRYING TO CLOSE THIS WINDOW');
//       alert('STOP TRYING TO CLOSE THIS WINDOW');
//       alert('STOP TRYING TO CLOSE THIS WINDOW');
//     };
//   }
// }

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}
