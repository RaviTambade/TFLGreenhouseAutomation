var mongoose = require('mongoose');

var GreenhouseSchema = new mongoose.Schema({ greenhouseId:Number,
                                            title:String,
                                            description:String,
                                            crop:String,
                                            bed:Number,
                                            day:Number,
                                            month:Number,
                                            year:Number,
                                            stage:String,
                                            plants:Number,
                                            fans:Number,
                                            image:String
},
                                        { versionKey:false});

module.exports = mongoose.model('Greenhouse', GreenhouseSchema);