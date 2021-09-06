const express = require("express");

const {
  getRecipes,
  getRecipe
} = require('../controllers/recipes');

const api = express.Router();

api
  .route('/') 
  .get(getRecipes)
  //.post(createRecipe)

api
  .route('/:id')
  .get(getRecipe)
  //.delete(deleteRecipe)
  //.put(updateRecipe)

module.exports = api;