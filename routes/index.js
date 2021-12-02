var express = require('express');
var router = express.Router();
const controller = require('../controllers/recipes');

router.get('/', controller.getHomePage);

module.exports = router;
