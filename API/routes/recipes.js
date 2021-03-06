const express = require('express');
const router = express.Router();
const controller = require('../controllers/recipes');
const jwt = require('express-jwt');
const uploadRecipePic = require("../utilities/upload/recipesMulter");
require('dotenv').config();

router
    // .get('/', controller.getAllRecipes)
    .get('/breakfast', controller.getBreakfast)
    .get('/brunch', controller.getBrunch)
    .get('/dinner', controller.getDinner)
    .get('/lunch', controller.getLunch)
    .get('/myrecipes', jwt({ secret: process.env.SECRET_AUTH_TOKEN, algorithms: ['HS256'] }), controller.getMyRecipes)
    .get('/myrecipes/:id', jwt({ secret: process.env.SECRET_AUTH_TOKEN, algorithms: ['HS256'] }), controller.getMyRecipe)
    // .get('/myrecipes/view/:id', jwt({ secret: process.env.SECRET_AUTH_TOKEN, algorithms: ['HS256'] }), controller.getViews)
    .get('/myrecipes/view/:id', controller.getViews)
    .patch('/createrecipes', jwt({ secret: process.env.SECRET_AUTH_TOKEN, algorithms: ['HS256'] }),uploadRecipePic.single("image"), controller.postRecipe)
    .patch('/updateRecipe/:id', jwt({ secret: process.env.SECRET_AUTH_TOKEN, algorithms: ['HS256'] }),uploadRecipePic.single("image"),controller.postUpdate)
    .delete('/myrecipes/delete/:id', jwt({ secret: process.env.SECRET_AUTH_TOKEN, algorithms: ['HS256'] }), controller.deleteMyRecipe)

module.exports = router; 