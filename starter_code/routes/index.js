const express = require('express');

const router = express.Router();
const controller = require('../controllers/form.controller');


/* GET home page. */
router.get('/', controller.getForm);

module.exports = router;
