



var mongoose = require('mongoose');

var YieldSchema = new mongoose.Schema({   yieldId:Number,
                                          quantity:Number,
                                          cropName:String,
                                          day:Number,
                                          month:Number,
                                          year:Number,
                                          greenhouseName:String,
                                         
                                        },
                                        { versionKey:false});

module.exports = mongoose.model('yield', YieldSchema);




















