var mongoose = require('mongoose');

var NutritionSchema = new mongoose.Schema({    
                                          nutritionId:Number,
                                          cropName:String,
                                          nutricient:String,
                                          symptoms:String,
                                          imageUrl:String,
                                          remedy:String
                                         
                                        },
                                        { versionKey:false});

module.exports = mongoose.model('Nutrition', NutritionSchema);

