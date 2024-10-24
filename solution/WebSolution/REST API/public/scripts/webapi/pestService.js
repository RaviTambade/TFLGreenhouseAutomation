var express = require('express');
var apiRouter = express.Router();

var Pest = require('../../../businessObjects/pest');

apiRouter.get('/', function(req, res) {
  var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
  };
  Pest.find(onSuccess);
});

apiRouter.get('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={pestId:req.params.id};
  Pest.findOne(query,onSuccess);
});

apiRouter.post('/', function(req, res) {
  var onSuccess=function (err, data) {
   if (err) {console.log("error occured!");}
    res.json(data);
  };
   var newPest=req.body;
   Pest.create(newPest, onSuccess);
});

apiRouter.put('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={pestId:req.params.id};
  Pest.findOneAndUpdate(query, req.body,onSuccess);
});

apiRouter.delete('/:id', function(req, res) {
  
  var onSuccess=function (err, data) {
  if (err) {console.log("error occured!");}
    res.json(data);
  };

  var query={pestId:req.params.id};
  Pest.findOneAndRemove(query,onSuccess);
});

module.exports = apiRouter;