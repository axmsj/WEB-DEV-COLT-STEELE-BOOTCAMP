const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const comments = [
  {
    username: 'Todd',
    comment: 'lol that is so funny',
  },
  {
    username: 'Skylar',
    comment: 'I like to go birdwatching with me dog',
  },
  {
    username: 'Sk8erBoi',
    comment: 'Plz delete your account Todd',
  },
  {
    username: 'onlysayswoof',
    comment: 'woof woof woof',
  },
];

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect('/comments');
});

app.get('/tacos', (req, res) => {
  res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
  const { meat, qty } = req.body;
  res.send(`Okay your taco meat is: ${meat} and your ordered ${qty} tacos!`);
});

app.listen(3000, () => {
  console.log('ON PORT 3000!');
});

// GET /comments - Show all comments
// POST /comments - Create new comment
// GET /comments/:id - get one comment(using ID)
// PATCH /comment/:id - update one comment.
// DELETE /comment/:id - Destroy one comment

// practice
const workout = [
  {
    day: 'Monday',
    muscle: 'Chest',
  },
  {
    day: 'Tuesday',
    muscle: 'Legs',
  },
  {
    day: 'Wednesday',
    muscle: 'Back',
  },
  {
    day: 'Thurday',
    muscle: 'REST DAY',
  },
  {
    day: 'Friday',
    muscle: 'Shoulders and Arms',
  },
  {
    day: 'Saturday',
    muscle: 'REST',
  },
];

// practice workout
app.get('/workout', (req, res) => {
  res.render('workout/workoutSplit', { workout });
});
