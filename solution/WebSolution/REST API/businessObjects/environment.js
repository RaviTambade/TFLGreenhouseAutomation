var mongoose = require('mongoose');

var EnvironmentSchema = new mongoose.Schema({ 
                                          
                                          climateId:Number,
                                          day:Number,
                                          month:Number,
                                          year:Number,
                                          hour:Number,
                                          minute:Number,
                                          temperature:Number,
                                          humidity:Number,
                                          light:Number,
                                          windSpeed:Number,
                                          co2:Number,
                                          soilMoisture:Number,
                                          ph:Number,
                                          ec:Number
                                        },
                                        { versionKey:false});

module.exports = mongoose.model('Environment', EnvironmentSchema);

 