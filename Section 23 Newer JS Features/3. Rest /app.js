// looks like spread

// function sum() {
//   console.log(arguments);
// }

// function sum(...nums) {
//   return nums.reduce((total, el) => total + el);
// }

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`Gold Metal goes to ${gold}`);
  console.log(`Silver metal goes to ${silver}`);
  console.log(`The rest of the participants are ${everyoneElse}`);
}
