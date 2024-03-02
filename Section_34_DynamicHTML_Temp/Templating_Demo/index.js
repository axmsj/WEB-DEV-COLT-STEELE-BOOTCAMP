const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
console.log(redditData);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/cats', (req, res) => {
  const cats = ['Blue', 'Rocky', 'Monty', 'Stephanie', 'Winston'];
  res.render('cats', { cats });
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  console.log(data);
  res.render('subreddit', { ...data });
});

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('random.ejs', { num });
});

app.listen(3000, () => {
  console.log('LISTENING TO PORT 3000');
});
