var mongoose = require('mongoose');

var PestSchema = new mongoose.Schema({
    pestId:Number,
    imageUrl:String,
    name:String,
    description:String,
    symptoms:String,
    remedy:String
},
{versionkey:false});



module.exports = mongoose.model('Pest',PestSchema);

 

 
 

    
