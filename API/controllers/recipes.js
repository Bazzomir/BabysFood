const Recipe = require('../models/recipe');
const User = require('../models/user');
const fs = require("fs");

module.exports = {
    // getAllRecipes: async (req, res) => {
    //     const recipes = await Recipe.find();
    //     res.send(recipes);
    // },
    getHomePage: async (req, res) => {
        try {
            const recipes = await Recipe.find();
            const NewRecipes = recipes.slice(-3);
            const PopularRecipes = recipes.sort((a, b) => b.views - a.views).slice(0, 6);
            res.send({
                err: false,
                message: "A list of all recipes",
                NewRecipes: NewRecipes,
                PopularRecipes: PopularRecipes
            });
        }
        catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    getBreakfast: async (req, res) => {
        try {
            const recipes = await Recipe.find({ category: "Breakfast" });
            res.send({
                error: false,
                message: 'Breakfasts',
                recipes: recipes
            })
        }
        catch (error) {
            res.send({
                error: true,
                message: error.message
            })
        }
    },
    getBrunch: async (req, res) => {
        try {
            const recipes = await Recipe.find({ category: "Brunch" });
            res.send({
                error: false,
                message: 'Brunches',
                recipes: recipes
            })
        }
        catch (error) {
            res.send({
                error: true,
                message: error.message
            })
        }
    },
    getDinner: async (req, res) => {
        try {
            const recipes = await Recipe.find({ category: "Dinner" });
            res.send({
                error: false,
                message: 'Dinners',
                recipes: recipes
            })
        }
        catch (error) {
            res.send({
                error: true,
                message: error.message
            })
        }
    },
    getLunch: async (req, res) => {
        try {
            const recipes = await Recipe.find({ category: "Lunch" });
            res.send({
                error: false,
                message: `Lunches`,
                recipes: recipes
            })
        }
        catch (error) {
            res.send({
                error: true,
                message: error.message
            })
        }
    },
    getViews: async (req, res) => {
        try {
            console.log(req.params.id);
            const recipe = await Recipe.findById(req.params.id);
            await Recipe.findByIdAndUpdate(recipe.id, { views: recipe.views += 1 });
            res.send({
                error: false,
                message: 'Recipe',
                recipe: recipe
            })
        }
        catch (error) {
            res.send({
                error: true,
                message: error.message
            })
        }
    },
    getMyRecipes: async (req, res) => {
        try {
            const user = await User.findById(req.user.id);
            const recipes = await Recipe.find({ user: req.user.id });
            res.send({
                error: false,
                message: `A list of all recipes from ${user.first_name}`,
                recipes: recipes
            })
        }
        catch (error) {
            res.send({
                error: true,
                message: error.message
            })
        }
    },
    getMyRecipe: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id);
            res.send({
                error: false,
                message: `${recipe.title}`,
                recipe: recipe
            })
        }
        catch (error) {
            res.send({
                error: true,
                message: error.message
            })
        }
    },
    postRecipe: async (req, res) => {
        try {
            const user = await User.findById(req.user.id);
            req.body.user = user.id;

            if (req.file) {
                req.body.image = `images/recipes/${req.file.filename}`;
            } else {
                req.body.image = ' '
                // req.body.image = "https://w7.pngwing.com/pngs/692/99/png-transparent-hamburger-street-food-seafood-fast-food-delicious-food-salmon-with-vegetables-salad-in-plate-leaf-vegetable-food-recipe-thumbnail.png"
            }

            const recipe = await Recipe.create(req.body);
            res.send({
                error: false,
                message: `User ${user.first_name} has just created a new recipes!`,
                recipe: recipe
            })
        }
        catch (error) {
            res.send({
                error: true,
                message: error.message
            })
        }
    },
    postUpdate: async (req, res) => {
        try {

            const recipe = await Recipe.findById(req.params.id);

            req.body.user = req.user.id;
            req.body.image = recipe.image;

            if (req.file) {
                req.body.image = `images/recipes/${req.file.filename}`;
                if (recipe.image != null && req.body.image !== recipe.image && recipe.image !== "https://w7.pngwing.com/pngs/692/99/png-transparent-hamburger-street-food-seafood-fast-food-delicious-food-salmon-with-vegetables-salad-in-plate-leaf-vegetable-food-recipe-thumbnail.png") {
                    fs.unlinkSync(`public/${recipe.image}`)
                }
            } else {
                req.body.image = ' '
                // if (recipe.image === undefined)
                //     req.body.image = "https://w7.pngwing.com/pngs/692/99/png-transparent-hamburger-street-food-seafood-fast-food-delicious-food-salmon-with-vegetables-salad-in-plate-leaf-vegetable-food-recipe-thumbnail.png"
            }

            await Recipe.findByIdAndUpdate(req.params.id, req.body);
            res.send({
                error: false,
                message: "Recipe has been updated",
            })
        }
        catch (error) {
            res.send({
                error: true,
                message: error.message,
            })
        }
    },
    deleteMyRecipe: async (req, res) => {
        try {
            await Recipe.findByIdAndDelete(req.params.id);
            res.send({
                error: false,
                message: "Recipe deleted"
            });
        }
        catch (error) {
            res.send({
                error: true,
                message: error.message
            })
        }
    }
}