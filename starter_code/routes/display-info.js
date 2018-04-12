const express = require('express');

const router = express.Router();
const controller = require('../controllers/form.controller');

router.post('/display-info', controller.postInfoDetails);

// think in better names for routes and controllers
