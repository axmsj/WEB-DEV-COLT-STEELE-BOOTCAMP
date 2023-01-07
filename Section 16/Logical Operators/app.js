// Use the && operator to be able to combine different if statements. Doing this will make it much more resourceful

// const password = prompt('Enter your password');
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//   console.log('Valid Password');
// } else {
//   console.log('INCORRECT FORMAT FOR PASSWORD!sdasad');
// }

// The OR operator is || and only one side needs to be true in this case.
// Anytime we want to use a range of number we can use && operator

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

// Putting Parenthesis for the && operator for it to run first.
// The & is going run before the OR (||)

// const age = 0;
// if ((age >= 0 && age < 5) || age >= 65) {
//   console.log('FREE');
// } else if (age >= 5 && age < 10) {
//   console.log('A $10 Dollar Fee');
// } else if (age >= 10 && age < 65) {
//   console.log('A $20 Dollar Fee');
// } else {
//   console.log('INVALID AGE');
// }

// The last logical operator is NOT meaning !expression.
// !expression returns true if expression is false

// const firstName = prompt('Enter your first name');
// if (!firstName) {
//   firstName = prompt('Try Again');
// }

// const age = 8;
// if (!(age >= 0 && age < 5) || age >= 65) {
//   console.log('YOU ARE NOT A BABY OR A SENIOR');
// }

// RECAP Logical Operators
// !expression returns true if expression is false
// OR - If one side is true, the entire thing is true
// AND - Both sides must be true, for the entire thing to be true.

// switch statement uses a case for an alternative to the if but needs a break if not it will show all the options below that selected number
const day = 6;
switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
  case 7:
    console.log('WEEKEND!');
    break;
  default:
    console.log('I DONT KNOW THAT');
}

// if (day === 1) {
//   console.log('Monday');
// } else if (day === 2) {
//   console.log('Tuesday');
// } else if (day === 3) {
//   console.log('Wednesday');
// } else if (day === 4) {
//   console.log('Thursday');
// } else if (day === 5) {
//   console.log('Friday');
// } else {
//   console.log('I DONT KNOW THAT!');
// }
