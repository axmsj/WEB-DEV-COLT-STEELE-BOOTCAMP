// function rollDie(numSides) {
//   return Math.floor(Math.random() * numSides) + 1;
// }

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = 'HEYYYY', punc = '!!!') {
  console.log(`${msg}, ${person}${punc}`);
}
