var mongoose = require('mongoose');

var IngredientSchema = new mongoose.Schema({    ingredientsID:Number,
                                                name:String,
                                                solutionName:String,
                                                fertilizerName:String,
                                                quantity:Number
                                            },
                                            { versionKey:false});

module.exports = mongoose.model('Ingredient', IngredientSchema);