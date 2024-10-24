var express = require('express');
var apiRouter = express.Router();

var Fertilizer = require('../../../businessObjects/fertilizer');

apiRouter.get('/', function(req, res) {
  console.log('Fertilizers  Get Method is Called from Angular Application');
  var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
  };
  Fertilizer.find(onSuccess);
});

apiRouter.get('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={FertilizerId:req.params.id};
  Fertilizer.findOne(query,onSuccess);
});

apiRouter.post('/', function(req, res) {
  var onSuccess=function (err, data) {
   if (err) {console.log("error occured!");}
    res.json(data);
  };
   var newFertilizer=req.body;
   Fertilizer.create(newFertilizer, onSuccess);
});

apiRouter.put('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={FertilizerId:req.params.id};
  Fertilizer.findOneAndUpdate(query, req.body,onSuccess);
});

apiRouter.delete('/:id', function(req, res) {
  
  var onSuccess=function (err, data) {
  if (err) {console.log("error occured!");}
    res.json(data);
  };

  var query={FertilizerId:req.params.id};
  var theFertilizer=req.body;
  Fertilizer.findOneAndRemove(query,theFertilizer,onSuccess);
});

module.exports = apiRouter;