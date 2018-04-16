const express = require('express');

const router = express.Router();
const User = require('../models/User');


/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  const newUser = new User({
    fullName: req.body.fullName,
    age: req.body.age,
    country: req.body.country,
    color: req.body.color,
    birthday: req.body.birthday,
    favBook: req.body.favBook,
  });
  newUser.save()
    .then(() => {
      console.log('usuario guardado!!!');
      res.render('user-details');
      // res.status(200).json();
    })
    .catch(() => console.log('oh oh error'));
});

module.exports = router;
