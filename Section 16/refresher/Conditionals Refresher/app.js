// let random = Math.random();
// if (random < 0.5) {
//   console.log("YOUR NUMBER IS LESS THAN 0.5!!");
// } else {
//   console.log("YOUR NUMBER IS GREATER THAN 0.5!!!");
// }
// console.log(random);

// const dayOfWeek = prompt("Enter a day").toLowerCase();

// if (dayOfWeek === "monday") {
//   console.log("I hate Mondays!");
// } else if (dayOfWeek === "saturday") {
//   console.log("YAY I LOVE SATURDAY!");
// } else if (dayOfWeek === "friday") {
//   console.log("FRIDAYS ARE DECENT. ESPECIALLY AFTER WORK");
// } else {
//   console.log("MEH");
// }

// 0-5 - FREE
// 5 - 10 CHILD PRICE $10
// 10 - 65 ADULT
// 65+ SENIOR $10

// const age = 89;

// if (age < 5) {
//   console.log("You are a baby. You get in for free!");
// } else if (age < 10) {
//   console.log("You are a child. You pay $10 ");
// } else if (age < 65) {
//   console.log("You are a adult. You pay $20");
// } else {
//   console.log("You are a senior. You pay $10");
// }

const password = prompt("Please enter a new password");

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password");
  } else {
    console.log("Password can not include space");
  }
} else {
  console.log("PASSWORD TO SHORT! Must be 6+ characters");
}
