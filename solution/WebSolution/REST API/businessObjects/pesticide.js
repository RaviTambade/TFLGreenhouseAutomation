var mongoose = require('mongoose');

var PesticideSchema = new mongoose.Schema({    pesticideID:Number,
                                               name:String,
                                               title:String,
                                               description:String
                                          },
                                          { versionKey:false});

module.exports = mongoose.model('Pesticide', PesticideSchema);