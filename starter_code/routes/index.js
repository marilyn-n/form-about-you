const express = require('express');

const router = express.Router();
const Form = require('../models/Form');


/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res, next) => {
  const newForm = new Form({
    fullName: req.body.fullName,
    age: req.body.age,
    country: req.body.country,
    color: req.body.color,
    birthday: req.body.birthday,
    favBook: req.body.favBook,
  });
  newForm.save()
    .then(() => console.log('usuario guardado!!!'))
    .catch(() => console.log('oh oh error'));
});


module.exports = router;
