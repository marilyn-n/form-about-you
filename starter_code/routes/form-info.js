const express = require('express');

const router = express.Router();
const Form = require('../models/Form');

router.get('/form-info', (req, res) => {
  res.render('form-info');
});

module.exports = router;
