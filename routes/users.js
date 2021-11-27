const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.get('/', controller.all)
      .post('/register', controller.register)

module.exports = router;
