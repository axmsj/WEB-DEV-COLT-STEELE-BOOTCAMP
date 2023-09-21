// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//   guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET");

//Break Keyword
// let input = prompt("Hey say something");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("Okay you win");

// for (let i = 0; i <= 1000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);

  if (guess > targetNum) {
    guess = prompt("TOO HIGH! Enter a new guess");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("TOO LOW! Enter a new guess");
    attempts++;
  } else {
    guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
  }
}

if (guess === "q") {
  console.log("QUIT GAME");
} else {
  console.log(`YOU GOT! IT took you ${attempts} guess`);
}
