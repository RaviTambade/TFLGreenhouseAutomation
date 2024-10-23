var mongoose = require('mongoose');

var DiseaseSchema = new mongoose.Schema({ diseaseId:Number,
                                          name:String,
                                          description:String,
                                          symptoms:String,
                                          remedy:String                                           
                                        },
                                        { versionKey:false});

module.exports = mongoose.model('Disease', DiseaseSchema);