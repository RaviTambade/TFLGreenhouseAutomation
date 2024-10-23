var mongoose = require('mongoose');

var IrrigationSchema = new mongoose.Schema({    
                                          irrigationId:Number,
                                          greenhouseName:String,
                                          waterMoisture:Number,
                                          pumpStatus:String,
                                          day:Number,
                                          hour:Number,
                                          minute:Number,
                                          duration:Number,
                                          tankA:String,
                                          tankB:String
                                         
                                        },
                                        { versionKey:false});

module.exports = mongoose.model('Irrigation', IrrigationSchema);

