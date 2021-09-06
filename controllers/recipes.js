const Recipe = require('../models/Recipe');

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    console.log(recipes)
    res.json({
      success: true,
      data: recipes,
      msg: 'show all recipes'
    })
  } catch(err) {
    console.log(err)
  }
  
}; 


const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);

    res.json({
      msg: `show recipe with id ${id}`,
      success: true,
      data: recipe
    })
  } catch(err) {
    console.log(err)
  }
};

module.exports = {
  getRecipes,
  getRecipe
}
