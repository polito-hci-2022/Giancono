'use strict';

const express = require('express');
const morgan = require('morgan');
const userDao = require('./user-dao'); 
const riddleDao = require('./riddle-dao');
const cors = require('cors');

const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const {body, validationResult} = require("express-validator");

const app = new express();
const port = 3001;

app.use(morgan('dev'));
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));

passport.use(new LocalStrategy(async function verify(username, password, cb) {
  const user = await userDao.getUser(username, password)
  if(!user)
    return cb(null, false, 'Incorrect username or password.');
    
  return cb(null, user);
}));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) { 
  return cb(null, user);
});

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({error: 'Not authorized'});
}

app.use(session({
  secret: "Mind your own business",
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.authenticate('session'));
////////////////////////////////////////////////////////////// RIDDLES

app.get('/api/riddles', (request, response) => {
  riddleDao.listRiddles()
  .then(courses => response.json(courses))
  .catch(() => response.status(500).end());
});

app.get('/api/answer', isLoggedIn, (request, response) => {
  riddleDao.getAnswer(request.user.id)
  .then(courses => response.json(courses))
  .catch(() => response.status(500).end());
});

app.get('/api/answers', (request, response) => {
  riddleDao.getAnswers()
  .then(courses => response.json(courses))
  .catch(() => response.status(500).end());
});

app.post('/api/answer', 
  body("creatorid").isInt({"min": 1}).withMessage("Invalid user ID"),
  body("questionid").isInt({"min": 1}).withMessage("Invalid question ID"),
  body("answer").exists().withMessage("Invalid answer body"), 
  isLoggedIn, (req, res) => {
    riddleDao.addAnswer(req.body.creatorid, req.body.questionid, req.user.id, req.body.answer)
    .then(() => res.status(201).json({"message": "Answer correctly inserted."}))
    .catch(() => res.status(503).json({"error": "Database error."}));
  });

app.post('/api/riddle', 
  body("questionid").isInt({"min": 1}).withMessage("Invalid question ID"),
  body("question").exists().withMessage("Invalid riddle body"), 
  body("difficulty").isInt({"min": 1},{"max": 3}).withMessage("Invalid difficulty"),
  body("duration").isInt({"min": 30},{"max": 600}).withMessage("Invalid duration"),
  body("response").exists().withMessage("Invalid correct answer"),
  body("hint1").exists().withMessage("Invalid hint"),
  body("hint2").exists().withMessage("Invalid hint"),
isLoggedIn, (req, res) => {
  riddleDao.addRiddle(req.user.id,req.body.questionid,req.body.question,req.body.difficulty,req.body.duration,req.body.response,req.body.hint1,req.body.hint2)
  .then(() => res.status(201).json({"message": "Riddle correctly inserted."}))
  .catch(() => res.status(503).json({"error": "Database error."}));
});

app.put('/api/time', 
  body("creatorid").isInt({"min": 1}).withMessage("Invalid user ID"),
  body("questionid").isInt({"min": 1}).withMessage("Invalid question ID"),
  body("timestamp").optional().exists().withMessage("Invalid timestamp"), //////////////////////////////////////////
isLoggedIn, (req, res) => {
  riddleDao.putTime(req.body.timestamp, req.body.creatorid, req.body.questionid, req.user.id)
  .then(() => res.status(201).json({"message": "Riddle correctly updated"}))
  .catch(() => res.status(503).json({"error": "Database error."}));
});

app.put('/api/close',
  body("creatorid").isInt({"min": 1}).withMessage("Invalid user ID"),
  body("questionid").isInt({"min": 1}).withMessage("Invalid question ID"),
(req, res) => {
  riddleDao.closeRiddle(req.body.creatorid, req.body.questionid)
  .then(() => res.status(201).json({"message": "Riddle correctly closed."}))
  .catch(() => res.status(503).json({"error": "Database error."}));
});

app.put('/api/score', 
  body("score").optional().isInt({"min": 1}).withMessage("Invalid user ID"),
  body("questionid").optional().isInt({"min": 1}).withMessage("Invalid question ID"),
isLoggedIn, (req, res) => {
  userDao.putScore(req.user.id, req.body.score, req.body.question)
  .then(() => res.status(201).json({"message": "User correctly updated"}))
  .catch(() => res.status(503).json({"error": "Database error."}));
});

////////////////////////////////////////////////////////////// USER

app.post('/api/sessions', passport.authenticate('local'), (req, res) => {
  res.status(201).json(req.user);
});

app.get('/api/sessions/current', (req, res) => {
  if(req.isAuthenticated()) {
    res.json(req.user);}
  else
    res.status(401).json({error: 'Not authenticated'});
});

app.get('/api/rank', (req, res) => {
  userDao.getRanking()
  .then(users => res.json(users))
  .catch(() => res.status(500).end());
});

app.delete('/api/sessions/current', (req, res) => {
  req.logout(() => {
    res.end();
  });
});

/*** Other express-related instructions ***/

app.listen(port, () => console.log(`Server started at http://localhost:${port}.`));