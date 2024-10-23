var express = require('express');
var apiRouter = express.Router();

var Ingredient = require('../../../businessObjects/ingredient.js');

apiRouter.get('/', function(req, res) {
  var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
  };
  Ingredient.find(onSuccess);
});

apiRouter.get('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={ingredientsID:req.params.id};
  Ingredient.findOne(query,onSuccess);
});

apiRouter.post('/', function(req, res) {
  var onSuccess=function (err, data) {
   if (err) {console.log("error occured!");}
    res.json(data);
  };
   var newIngredient=req.body;
   
   Ingredient.create(newIngredient, onSuccess);
});

apiRouter.put('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={ingredientsID:req.params.id};
  Ingredient.findOneAndUpdate(query, req.body,onSuccess);
});

apiRouter.delete('/:id', function(req, res) {
  
  var onSuccess=function (err, data) {
  if (err) {console.log("error occured!");}
    res.json(data);
  };

  var query={ingredientsID:req.params.id};
  var theIngredient=req.body;
  Ingredient.findOneAndRemove(query,theIngredient,onSuccess);
});

module.exports = apiRouter;