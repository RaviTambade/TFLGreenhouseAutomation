var mongoose = require('mongoose');

var CropSchema = new mongoose.Schema({    cropId:Number,
                                          name:String,
                                          category:String,
                                          description:String,
                                          plantationDate:String,
                                          stage:String,
                                          season:String
                                        },
                                        { versionKey:false});

module.exports = mongoose.model('Crop', CropSchema);