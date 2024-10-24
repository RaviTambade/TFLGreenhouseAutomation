var mongoose = require('mongoose');
var InventorySchema = new mongoose.Schema({
    itemId:Number,
    title:String,
    category:String,
    description:String,
    stocks:Number
},
{versionkey:false});
module.exports = mongoose.model('Store',InventorySchema);

    
