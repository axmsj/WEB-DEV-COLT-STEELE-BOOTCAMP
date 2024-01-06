// async function hello() {}

// const sing = async () => {
//   throw new Error('UH OH')
//   return 'armando'
// }

// sing()
//   .then(data => {
//     console.log('PROMISE RESOLVED:', data)
//   })
//   .catch(err => {
//     console.log('OH NO PROMISE REJECTED')
//     console.log(err)
//   })

// const login = async (username, password) => {
//   if (!username || !password) throw 'Missing Credentials'
//   if (password === 'corgifeetarecute') return 'WELCOME!'
//   throw 'Invalid Password'
// }

// login('sadhuhasdu', 'corgifeetarecute')
//   .then(msg => {
//     console.log('LOGIN')
//     console.log(msg)
//   })
//   .catch(err => {
//     console.log('ERROR')
//     console.log(err)
//   })

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve()
    }, delay)
  })
}

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('indigo', 1000))
//   .then(() => delayedColorChange('violet', 1000))

// async function rainbow() {
//   await delayedColorChange('red', 1000)
//   await delayedColorChange('orange', 1000)
//   await delayedColorChange('yellow', 1000)
//   await delayedColorChange('green', 1000)
//   await delayedColorChange('blue', 1000)
//   await delayedColorChange('indigo', 1000)
//   await delayedColorChange('violet', 1000)
//   return 'All Done'
// }

// // rainbow().then(() => console.log('END OF THE RAINBOW'))

// async function printRainbow() {
//   await rainbow()
//   console.log('END OF THE MF RAINBOW')
// }

// printRainbow()

const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500
    setTimeout(() => {
      if (delay > 4000) {
        reject('Connection Timeout :((')
      } else {
        resolve(`Here is your fake data from (data parameter) ${url}`)
      }
    }, delay)
  })
}

async function makeTwoRequest() {
  try {
    let data1 = await fakeRequest('/page1')
    console.log(data1)
    let data2 = await fakeRequest('/page2')
    console.log(data2)
  } catch (e) {
    console.log('CAUGHT AN ERROR')
    console.log('error is:', e)
  }
}