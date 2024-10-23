var mongoose = require('mongoose');

var GreenHouseControlSchema = new mongoose.Schema({  
                                                    greenHouseId:Number,
                                                    fan:Boolean,
                                                    pump:Boolean,
                                                    light:Boolean,
                                                    fogger:Boolean,
                                                    pad:Boolean,
                                                    ventilator:Boolean                                           
                                                },

                                                { 
                                                    versionKey:false
                                                }
                                        );

module.exports = mongoose.model('GreenHouseControl', GreenHouseControlSchema);




 

