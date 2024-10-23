var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({  userID:Number,
                                        firstName: String,
                                        lastName: String,
                                        email: String,
                                        age:Number,
                                        birthDate:Date,
                                        phoneNo:String,
                                        location:String,
                                        isStaff:Boolean,
                                        memberShip:String,
                                        password:String
                                      },
                                      {versionKey:false});
module.exports = mongoose.model('User', UserSchema);