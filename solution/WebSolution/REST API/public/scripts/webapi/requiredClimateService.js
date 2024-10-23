var express = require('express');
var apiRouter = express.Router();

var RequiredClimate = require('../../../businessObjects/requiredClimate');

apiRouter.get('/', function(req, res) {
  var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
  };
  RequiredClimate.find(onSuccess);
});

apiRouter.get('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={requiredClimateId:req.params.id};
  RequiredClimate.findOne(query,onSuccess);
});

apiRouter.post('/', function(req, res) {
  var onSuccess=function (err, data) {
   if (err) {console.log("error occured!");}
    res.json(data);
  };
   var newClimate=req.body;
   RequiredClimate.create(newClimate, onSuccess);
});

apiRouter.put('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={requiredClimateId:req.params.id};
  RequiredClimate.findOneAndUpdate(query, req.body,onSuccess);
});

apiRouter.delete('/:id', function(req, res) {
  
  var onSuccess=function (err, data) {
  if (err) {console.log("error occured!");}
    res.json(data);
  };

  var query={requiredClimateId:req.params.id};
  var therequiredClimate=req.body;
  RequiredClimate.findOneAndRemove(query,therequiredClimate,onSuccess);
});

module.exports = apiRouter;