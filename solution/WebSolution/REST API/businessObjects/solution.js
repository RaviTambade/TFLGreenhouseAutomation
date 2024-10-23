var mongoose=require ('mongoose');

var SolutionSchema=new mongoose.Schema({
                                                    solutionId:Number,
                                                    title:String,
                                                    quantity:Number,              
                                                    description:String,
                                                    day:Number,
                                                    year:Number,
                                                    month:Number,
                                                    hour:Number,
                                                    minute:Number,
                                                    greenhouse:String,
                                                    ingredients:[{}],
                                                    tank:String
                                                  },
                                                    {versionKey:false});

module.exports=mongoose.model('Solution',SolutionSchema);





