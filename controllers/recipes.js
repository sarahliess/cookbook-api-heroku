const Recipe = require("../models/Recipe");

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    console.log(recipes);
    res.json({
      success: true,
      data: recipes,
      msg: "show all recipes",
    });
  } catch (err) {
    console.log(err);
  }
};

const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);

    res.json({
      msg: `show recipe with id ${id}`,
      success: true,
      data: recipe,
    });
  } catch (err) {
    console.log(err);
  }
};

const createRecipe = async (req, res) => {
  try {
    const { name, image, ingredients, description } = req.body;
    const recipe = await Recipe.create({
      name,
      image,
      ingredients,
      description,
    });

    res.json({
      msg: `added recipe ${id}`,
      success: true,
      data: recipe,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
};
