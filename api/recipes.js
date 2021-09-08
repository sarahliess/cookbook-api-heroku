const express = require("express");

const {
  getRecipes,
  getRecipe,
  createRecipe,
} = require("../controllers/recipes");

const api = express.Router();

api.route("/").get(getRecipes).post(createRecipe);

api.route("/:id").get(getRecipe);
//.delete(deleteRecipe)
//.put(updateRecipe)

module.exports = api;

//curl -d '{"name": "New Recipe", "image": "url", "ingredients": "100", "description": "steps "}' -H "Content-Type: application/json" -X POST http://localhost:5000/recipes/
