// Not important to remember (old way)

const req = new XMLHttpRequest()

req.onload = function () {
  console.log('IT LOADED')
  const data = JSON.parse(this.responseText)
  console.log(data.fact, data.length)
}
req.onerror = function () {
  console.log('Error')
  console.log(this)
}

req.open('GET', 'https://catfact.ninja/fact')
req.send()

// 'https://swapi.dev/api/people/1/'
