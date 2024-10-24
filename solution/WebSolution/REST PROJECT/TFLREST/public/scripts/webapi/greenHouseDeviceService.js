var express = require('express');
var apiRouter = express.Router();

var GreenHouseController = require('../../../businessObjects/greenHouseControl.js');

apiRouter.get('/', function(req, res) {
  var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
  };
  GreenHouseController.find(onSuccess);
});

apiRouter.get('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={greenHouseId:req.params.id};
  GreenHouseController.findOne(query,onSuccess);
});

 
apiRouter.put('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={greenHouseId:req.params.id};
  GreenHouseController.findOneAndUpdate(query, req.body,onSuccess);
});

 

module.exports = apiRouter;