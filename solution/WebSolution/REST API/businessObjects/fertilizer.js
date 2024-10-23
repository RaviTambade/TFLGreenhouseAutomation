var mongoose = require('mongoose');

var FertilizerSchema = new mongoose.Schema({ FertilizerId:Number,
                                          name:String,
                                          chemicalFormula:String,
                                          description:String,
                                          N:Number,
                                          P:Number,
                                          K:Number,
                                          Ca:Number,
                                          Mg:Number,
                                          Cl:Number,
                                          S:Number,
                                          Cu:Number,
                                          Mn:Number,
                                          B:Number,                                                                    
                                          Zn:Number,
                                          Fe:Number,
                                          Na:Number
                                        },
                                        { versionKey:false});

module.exports = mongoose.model('Fertilizer', FertilizerSchema);