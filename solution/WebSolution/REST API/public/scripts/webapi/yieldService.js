var express = require('express');
var apiRouter = express.Router();

var Yield = require('../../../businessObjects/yield.js');

apiRouter.get('/', function(req, res) {
  var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
  };
Yield.find(onSuccess);
});

apiRouter.get('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={yieldId:req.params.id};
 Yield.findOne(query,onSuccess);
});

apiRouter.post('/', function(req, res) {
  var onSuccess=function (err, data) {
   if (err) {console.log("error occured!");}
    res.json(data);
  };
   var newYield=req.body;
   Yield.create(newYield, onSuccess);
});

apiRouter.put('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={yieldId:req.params.id};
  Yield.findOneAndUpdate(query, req.body,onSuccess);
});

apiRouter.delete('/:id', function(req, res) {
  
  var onSuccess=function (err, data) {
  if (err) {console.log("error occured!");}
    res.json(data);
  };

  var query={yieldId:req.params.id};
  var theYield=req.body;
Yield.findOneAndRemove(query,theYield,onSuccess);
});

module.exports = apiRouter;