var mongoose = require('mongoose');

var TankscheduleSchema = new mongoose.Schema({    
                                          tankscheduleId:Number,
                                          year:Number,
                                          month:Number,
                                          day:Number,
                                          hour:Number,
                                          minute:Number,
                                          tankName:String,
                                          quantity:Number,
                                          solutionId:String,
                                          usageDuration:Number   
                                         
                                        },
                                        { versionKey:false});

module.exports = mongoose.model('Tankschedule', TankscheduleSchema);

