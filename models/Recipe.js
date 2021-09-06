const mongoose = require('mongoose');

const { Schema } = mongoose;

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    maxlength: [100, 'max 100 chars are allowed for the name']
  },
  image: {
    type: String,
    required: [true, 'Please add an image'],
    maxlength: [200, 'max 200 chars are allowed for the image']
  },
  ingredients: {
    type: String,
    required: [true, 'Please add ingredients'],
    maxlength: [700, 'max 700 chars are allowed for the ingredients']
  }, 
  description: {
     type: String,
     required: [true, 'Please add a description'],
     maxlength: [700, 'max 700 chars are allowed for the ingredients']
  }

});

// Recipe => Recipes
module.exports = mongoose.model('Recipe', RecipeSchema);