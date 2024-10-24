var express = require('express');
var apiRouter = express.Router();

var Solution = require('../../../businessObjects/solution');

apiRouter.get('/', function(req, res) {
  var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
  };
 Solution.find(onSuccess);
});

apiRouter.get('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={solutionId:req.params.id};
  Solution.findOne(query,onSuccess);
});

apiRouter.post('/', function(req, res) {
  var onSuccess=function (err, data) {
   if (err) {console.log("error occured!");}
    res.json(data);
  };
   var newSolution=req.body;
  Solution.create(newSolution, onSuccess);
});

apiRouter.put('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={solutionId:req.params.id};
 Solution.findOneAndUpdate(query, req.body,onSuccess);
});

apiRouter.delete('/:id', function(req, res) {
  
  var onSuccess=function (err, data) {
  if (err) {console.log("error occured!");}
    res.json(data);
  };

  var query={solutionId:req.params.id};
  var theSolution=req.body;
  Solution.findOneAndRemove(query,theSolution,onSuccess);
});

module.exports = apiRouter;