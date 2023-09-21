/* All methods are functions but not every function is a method.

Methods
- We can add functions as properties on objects
- We call them methods!



*/

// const myMath = {
//   PI: 3.14159,
//   square(num) {
//     return num * num;
//   },
//   cube(num) {
//     return Math.pow(num, 3);
//   },
// };

// example
// const square = {
//   area(side) {
//     return Math.pow(side, 2);
//   },
//   perimeter(side) {
//     return side * 4;
//   },
// };

// 'this' in methods
// use the keyword this to access other properties on the same object.

// const cat = {
//   name: 'Blue Steele',
//   color: 'grey',
//   breed: 'scottish fold',
//   meow() {
//     console.log('THIS IS:', this);
//     console.log(`${this.name} says MEOW MEOW MEOW`);
//   },
// };

// const meow2 = cat.meow;

//coding exercise
const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg() {
    console.log(`${this.eggCount++}`);
    return 'EGG';
  },
};
