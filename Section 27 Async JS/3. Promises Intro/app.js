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
        reject('Connection Timeout :((');
      } else {
        resolve(`Here is your fake data from (data parameter) ${url}`);
      }
    }, delay);
  });
};

// fakeRequestCallback(
//   'books.com/page1',
//   function (response) {
//     console.log('IT WORKED');
//     console.log(response);
//     fakeRequestCallback(
//       'books.com/page2',
//       function (response) {
//         console.log('IT WORKED AGAIN');
//         console.log(response);
//         fakeRequestCallback(
//           'books.com/page3',
//           function (response) {
//             console.log('It worked x3');
//             console.log(response);
//           },
//           function (err) {
//             console.log('ERR (3rd Request)');
//             console.log(err);
//           }
//         );
//       },
//       function (err) {
//         console.log('ERR (2nd Request) ');
//       }
//     );
//   },
//   function (err) {
//     console.log('ERROR');
//     console.log(err);
//   }
// );

// fakeRequestPromise('yelp.com/api/coffee/page1')
//   .then(() => {
//     console.log('It WORKED (page1)');
//     fakeRequestPromise('yelp.com/api/coffee/page2')
//       .then(() => {
//         console.log('It Worked (page2)');
//         fakeRequestPromise('yelp.com/api/coffee/page3')
//           .then(() => {
//             console.log('IT WORKED (page3)');
//           })
//           .catch(() => {
//             console.log('ERROR (page3)');
//           });
//       })
//       .catch(() => {
//         console.log('ERROR (page2)');
//       });
//   })
//   .catch(() => {
//     console.log('ERROR (page1)');
//   });

fakeRequestPromise('yelp.com/api/coffee/page1')
  .then(data => {
    console.log('It WORKED (page1)');
    console.log(data);
    return fakeRequestPromise('yelp.com/api/coffee/page2');
  })
  .then(data => {
    console.log('IT WORKED (PAGE2)');
    console.log(data);
    return fakeRequestPromise('yelp.com/api/coffee/page3');
  })
  .then(data => {
    console.log('IT WORKED (PAGE3)');
    console.log(data);
  })
  .catch(err => {
    console.log('OH NO FAILED');
    console.log(err);
  });
