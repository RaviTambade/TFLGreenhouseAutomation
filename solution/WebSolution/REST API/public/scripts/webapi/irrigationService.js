var express = require('express');
var apiRouter = express.Router();

var Irrigation = require('../../../businessObjects/irrigation');

apiRouter.get('/', function(req, res) {
  var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
  };
  Irrigation.find(onSuccess);
});

function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}



apiRouter.get('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);

    var plantationDate=new Date();
    plantationDate.setFullYear(2017,4,12);

    console.log("The Day is : "+ data.day);

   var irrigationDate=new Date();
    irrigationDate.setDate(plantationDate.getDate()+ data.day);

    console.log("Irrigation day is:  " +irrigationDate);

    //var today = new Date();

    /*var text;
    if (irrigationDate > today) {
        text = "Today is before.";
    } else {
        text = "Today is after.";
    }*/
  
    // var plantDay=daydiff(plantationDate,irrigationDate);
    //console.log("Plant Day number ="+ plantDay);


 

    //irrigationDate.setDate(data.day);
    //irrigationDate.setDate(d.getDate() + 50);

    };
  var query={irrigationId:req.params.id};
  Irrigation.findOne(query,onSuccess);
});

apiRouter.post('/', function(req, res) {
  var onSuccess=function (err, data) {
   if (err) {console.log("error occured!");}
    res.json(data);
  };
   var newIrrigation=req.body;
   Irrigation.create(newIrrigation, onSuccess);
});

apiRouter.put('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={irrigationId:req.params.id};
  Irrigation.findOneAndUpdate(query, req.body,onSuccess);
});

apiRouter.delete('/:id', function(req, res) {
  
  var onSuccess=function (err, data) {
  if (err) {console.log("error occured!");}
    res.json(data);
  };

  var query={irrigationId:req.params.id};
  Irrigation.remove(query,onSuccess);
});

module.exports = apiRouter;