const express = require('express');

const router = express.Router();
const User = require('../models/User');

router.get('/user-info', (req, res) => {
  res.render('user-details');
});

module.exports = router;
