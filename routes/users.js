const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');
const jwt = require('express-jwt');

router
      .post('/register', controller.register)
      .post('/login', controller.login)
      .get('/', jwt({ secret: process.env.SECRET_AUTH_TOKEN, algorithms: ['HS256'] }), controller.getUserById)
      .patch('/', jwt({ secret: process.env.SECRET_AUTH_TOKEN, algorithms: ['HS256'] }), controller.editUser)
      .post('/logout', controller.logout)

module.exports = router;
