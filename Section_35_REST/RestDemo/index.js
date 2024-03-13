const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const comments = [
  {
    id: uuid(),
    username: 'Todd',
    comment: 'lol that is so funny',
  },
  {
    id: uuid(),
    username: 'Skylar',
    comment: 'I like to go birdwatching with me dog',
  },
  {
    id: uuid(),
    username: 'Sk8erBoi',
    comment: 'Plz delete your account Todd',
  },
  {
    id: uuid(),
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
  comments.push({ username, comment, id: uuid() });
  res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/show', { comment });
});

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find(c => c.id === id);
  foundComment.comment = newCommentText;
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
