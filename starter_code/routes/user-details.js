const express = require('express');

const router = express.Router();
// const User = require('../models/User');

router.get('/', (req, res) => {
  console.log('rendering...');
  res.render('user-details');
});

module.exports = router;
