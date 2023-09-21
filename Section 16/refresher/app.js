// Truthy and Falsy
// const userInput = prompt("Enter something");

// if (userInput) {
//   console.log("TRUTHY");
// } else {
//   console.log("Falsy");
// }

// Logical Operators && || !
// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("VALID PASSWORD");
// } else {
//   console.log("INCORRECT FORMAT FOR PASSWORD");
// }

// && and ||
// 0-5 Free
// 5-9 (<10) $10
// (>=10)10-65 $20
// 65+ Free
// const age = 100;

// if ((age >= 0 && age < 5) || age >= 65) {
//   console.log("Free");
// } else if (age >= 5 && age < 10) {
//   console.log("$10");
// } else if (age >= 10 && age < 65) {
//   console.log("$20");
// } else {
//   console.log("Invalid age");
// }

// const firstName = prompt("Enter your first name");
// if (!firstName) {
//   firstName = prompt("TRY AGAIN");
// }

// const age = 64;
// if (!((age >= 0 && age < 5) || age >= 65)) {
//   console.log("YOU ARE NOT A BABY OR A SENIOR");
// }

//Switch Statement

const day = 9;
switch (day) {
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
  case 7:
    console.log("WEEKEND");
    break;
  default:
    console.log("I DONT KNOW THAT");
}

// if (day === 1) {
//   console.log("MONDAY");
// } else if (day === 2) {
//   console.log("TUESDAY");
// } else if (day === 3) {
//   console.log("WEDNESDAY");
// } else if (day === 4) {
//   console.log("THURSDAY");
// } else if (day === 5) {
//   console.log("FRIDAY");
// } else {
//   console.log("I DONT KNOW THAT");
// }
