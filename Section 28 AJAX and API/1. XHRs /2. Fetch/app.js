// fetch('https://swapi.dev/api/people/1')
//   .then(res => {
//     console.log('FIRST RES', res)
//     return res.json()
//   })
//   .then(data => {
//     console.log(data)
//     return fetch('https://swapi.dev/api/people/2')
//   })
//   .then(res => {
//     console.log('SECOND RES', res)
//     return res.json()
//   })
//   .then(data => {
//     console.log(data)
//     return fetch('https://swapi.dev/api/people/3')
//   })
//   .then(res => {
//     console.log('THIRD RES', res)
//     return res.json()
//   })
//   .then(data => {
//     console.log(data)
//   })
//   .catch(e => console.log('Error:', e))

const loadSWP = async () => {
  const request = await fetch('https://swapi.dev/api/people/1')
  const data = await request.json()
  console.log(data)
  const req2 = await fetch('https://swapi.dev/api/people/2')
  const data2 = await req2.json()
  console.log(data2)
  const req3 = await fetch('https://swapi.dev/api/people/3')
  const data3 = await req3.json()
  console.log(data3)
  const names = async () => {
    console.log(data.name)
    console.log(data2.name)
    console.log(data3.name)
  }
  return names()
}

loadSWP()
