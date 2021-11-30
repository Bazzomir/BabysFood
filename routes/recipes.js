const express = require('express');
const router = express.Router();
const controller = require('../controllers/recipes');
const jwt = require('express-jwt');

require('dotenv').config();

router.get('/', controller.all)
      .get('/:id', controller.getByID)
      .get('/users/:id', controller.getByUser)
      .post('/', jwt({ secret: process.env.SECRET_AUTH_TOKEN, algorithms: ['HS256'] }), controller.create)

module.exports = router;