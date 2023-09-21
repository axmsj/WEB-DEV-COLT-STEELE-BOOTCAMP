// console.log('Hello');

//setTimeout prints the function after desired seconds once.

// setTimeout(() => {
//   console.log('...are you still there?');
// }, 3000);

//setInterval

// setInterval prints out the function every x amount of time you listed.

const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

//clearInterval(id name) to stop setInterval()
