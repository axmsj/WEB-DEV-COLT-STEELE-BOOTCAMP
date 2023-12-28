// Not important to remember (old way)

const req = new XMLHttpRequest()

req.onload = function () {
  console.log('IT LOADED')
  console.log(this.responseText)
}

req.onerror = function () {
  console.log('ERROR ')
  console.log(this)
}

req.open('Get', 'https://swapi.dev/api/people/1/')
req.send()

// 'http https://swapi.dev/api/people/1/'
