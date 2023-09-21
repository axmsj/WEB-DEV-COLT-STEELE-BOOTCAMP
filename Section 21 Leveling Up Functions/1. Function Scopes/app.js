//Function Scope
// let totalEggs = 0;

// function collectEggs() {
//   totalEggs = 6;
// }

// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = 'Scarlet Macaw';

// function birdWatch() {
//     let bird = 'Great Blue Heron';
//   console.log(bird);
// }

// birdWatch();

//Block Scope
//conditions and for loops

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = 'Hi!';
// }

// console.log(radius);

//Lexical Scope

function bankRobbery() {
  const heros = ['Spiderman', 'Wolverine', 'Blank Panther', 'Batwomen'];

  function cryForHelp() {
    function inner() {
      for (let hero of heros) {
        console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
      }
    }
    inner();
  }
  cryForHelp();
}

//inner function have access to the parent function variables. basically whay lexical scope is.
