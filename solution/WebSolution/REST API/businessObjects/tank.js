var mongoose = require('mongoose');

var TankSchema = new mongoose.Schema({    tankId:Number,
                                          category:String,
                                          greenhouseId:Number,
                                          description:String,
                                          capacity:Number
                                        },
                                        { versionKey:false});

module.exports = mongoose.model('Tank', TankSchema);

