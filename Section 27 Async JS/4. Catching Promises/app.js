// const fakeRequest = url => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();

//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve('YOUR FAKE DATA HERE');
//       }
//       reject('REQUEST ERROR');
//     }, 1000);
//   });
// };

// fakeRequest('dogs/1')
//   .then(data => {
//     console.log('DONE WITH REQUEST');
//     console.log('data is: ', data);
//   })
//   .catch(() => {
//     console.log('OH NO ERROR');
//   });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve()
    }, delay)
  })
}

delayedColorChange('red. 1000')
  .then(() => delayedColorChange('orange', 1000))
  .then(() => delayedColorChange('yellow', 1000))
  .then(() => delayedColorChange('green', 1000))
  .then(() => delayedColorChange('blue', 1000))
  .then(() => delayedColorChange('indigo', 1000))
  .then(() => delayedColorChange('violet', 1000))
  .then(() => delayedColorChange('white', 1000))

const h1 = document.querySelector('#header')

const delayedColorHeader = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color
      resolve()
    }, delay)
  })
}

delayedColorHeader('violent', 1000).then(() =>
  delayedColorHeader('indigo', 1000)
    .then(() => delayedColorHeader('blue', 1000))
    .then(() => delayedColorHeader('green', 1000))
    .then(() => delayedColorHeader('yellow', 1000))
    .then(() => delayedColorHeader('orange', 1000))
    .then(() => delayedColorHeader('red', 1000))
)
// My practice changing header by creating a new Promise with asynchronous js

// const header = document.querySelector('h1');

// const delayedColorChange2 = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       header.style.color = color;
//       resolve();
//     }, delay);
//   });
// };

// delayedColorChange2('white', 1000).then(() => {
//   delayedColorChange2('blue', 1000).then(() => {
//     delayedColorChange2('green', 1000).then(() => {
//       delayedColorChange2('yellow', 1000).then(() => {
//         delayedColorChange2('orange', 1000).then(() => {
//           delayedColorChange2('red', 1000).then(() => {
//             delayedColorChange2('black', 1000);
//           });
//         });
//       });
//     });
//   });
// });
