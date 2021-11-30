const Recipe = require('../models/recipe');

module.exports = {
    all: async (req, res) => {
        try {

            const recipes = await Recipe.find().populate('user');

            res.send({
                error: false,
                message: 'List of all recipes from the database for you my dear (:',
                recipes: recipes
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    }, getByID: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id).populate('user');

            res.send({
                error: false,
                message: `Details about recipe with id #${req.params.id}`,
                recipe: recipe
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    getByUser: async (req, res) => {
        try {
            const recipes = await Recipe.find({ user: req.params.id })

            res.send({
                error: false,
                message: `All recipes from user with id #${req.params.id}`,
                recipes: recipes
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    create: async (req, res) => {
        try {
            req.body.user = req.user.id;
            const recipe = await Recipe.create(req.body);

            res.status(201).send({
                error: false,
                message: `User with id #${req.body.user} has just created a new recipes!`,
                recipe: recipe
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
}