var mongoose = require('mongoose');

var RequiredClimateSchema = new mongoose.Schema({ requiredClimateId:Number,
                                          cropId:Number,
                                          dayTemperature:Number,
                                          nightTemperature:Number,
                                          humidity:Number,
                                          luminocity:Number,
                                          soilMoisture:Number,
                                          wavelenght:Number,
                                          eC:Number,
                                          pH:Number
                                          
                                        },
                                        { versionKey:false});

module.exports = mongoose.model('RequiredClimate', RequiredClimateSchema);