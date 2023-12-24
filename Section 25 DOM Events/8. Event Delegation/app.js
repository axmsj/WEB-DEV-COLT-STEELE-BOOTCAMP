// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//   li.addEventListener('click', function () {
//     li.remove();
//   });
// }

const tweetForm = document.querySelector('#tweetForm');
const unorderedList = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = '';
  tweetInput.value = '';
});

const addTweet = (username, tweet) => {
  const newLI = document.createElement('li');
  const boldTag = document.createElement('b');
  boldTag.append(username);
  newLI.append(boldTag);
  newLI.append(` - ${tweet}`);
  unorderedList.append(newLI);
};

unorderedList.addEventListener('click', function (e) {
  e.target.remove();
});
