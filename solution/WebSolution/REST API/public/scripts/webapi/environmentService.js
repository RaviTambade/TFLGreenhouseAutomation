var express = require('express');
var apiRouter = express.Router();

var Environment = require('../../../businessObjects/environment');

apiRouter.get('/', function(req, res) {
  var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    console.log()
    res.json(data);
  };
   Environment.find(onSuccess);
   
});

apiRouter.get('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={climateId:req.params.id};
  Environment.findOne(query,onSuccess);
});

apiRouter.get('/current/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={climateId:req.params.id};
  Environment.findOne(query,onSuccess);
});


apiRouter.post('/interval', function(req, res) {
    console.log("retrieving data from date ");
   var onSuccess=function (err, data) {
   if (err) {console.log("error occured!");}
    res.json(data);
  };
   var myDate=req.body;
   console.log(myDate);


Environment.find({"day":{$gte:2},"month":4},onSuccess);
 
});

   
apiRouter.post('/', function(req, res) {
  var onSuccess=function (err, data) {
   if (err) {console.log("error occured!");}
    res.json(data);
  };
   var newEnvironment=req.body;
   Environment.create(newEnvironment, onSuccess);
});

apiRouter.put('/:id', function(req, res) {
    var onSuccess=function (err, data) {
    if (err) {console.log("error occured!");}
    res.json(data);
    };
  var query={climateId:req.params.id};
  Environment.findOneAndUpdate(query, req.body,onSuccess);
});

apiRouter.delete('/:id', function(req, res) {
  
  var onSuccess=function (err, data) {
  if (err) {console.log("error occured!");}
    res.json(data);
  };

  var query={climateId:req.params.id};
   
  Environment.findOneAndRemove(query,onSuccess);
});

module.exports = apiRouter;