const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure('Connection Timeout :(');
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

const fakeRequestPromise = url => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('Connection Timeout');
      } else {
        resolve(`Hre is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestCallback(
  'books.com/page1',
  function (response) {
    console.log('IT WORKED');
    console.log(response);
    fakeRequestCallback(
      'books.com/page2',
      function (response) {
        console.log('IT WORKED AGAIN');
        console.log(response);
      },
      function (err) {
        console.log('ERR (2nd Request) ');
      }
    );
  },
  function (err) {
    console.log('ERROR');
    console.log(err);
  }
);
