var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({    taskId:Number,
                                               title:String,
                                               description:String,
                                               category:String,
                                               duration:Number,
                                               day:Number,
                                               year:Number,
                                               hr:Number,
                                               mins:Number,
                                               status:String,
                                               assignTo:String,
                                               assignBy:String
                                          },
                                          { versionKey:false});

module.exports = mongoose.model('Task', TaskSchema);
