// const fakeRequest = url => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random()
//       if (rand < 0.7) {
//         resolve('YOUR FAKE DATA HERE')
//       }
//       reject('REQUESTED ERROR')
//     }, 1000)
//   })
// }

// fakeRequest('/dogs1')
//   .then(data => {
//     console.log('DONE WITH REQUEST')
//     console.log('data is:', data)
//   })
//   .catch(e => {
//     console.log('OH NO', e)
//   })
