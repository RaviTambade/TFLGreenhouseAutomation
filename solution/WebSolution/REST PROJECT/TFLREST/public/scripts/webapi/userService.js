var express = require('express');
var User = require('../../../businessObjects/user.js');

var apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
  var onSuccess=function (err, users) {
   if (err) {console.log("error occured!");}
    res.json(users);
  };

  User.find(onSuccess);
});

apiRouter.get('/:id', function(req, res) {
   var onSuccess=function (err, user) {
     if (err) {console.log("error occured!");}
     res.json(user);
   };

   var query={userID:req.params.id};
   User.findOne(query, onSuccess);
});

apiRouter.post('/', function(req, res) {
   var onSuccess=function (err, post) {
     if (err) {console.log("error occured!");}
     res.json(post);
   };
   var newUser=req.body;

   User.create(newUser,onSuccess);
});

apiRouter.put('/:id', function(req, res) {
   var onSuccess=function (err, post) {
    if (err) {console.log("error occured!");}
    res.json(post);
   };

   var query={userID:req.params.id};
   var theUpdatedProduct=req.body;
   User.findOneAndUpdate(query,theUpdatedProduct,onSuccess );
});

apiRouter.delete('/:id', function(req, res) {
  var onSuccess=function (err, post) {
    if (err) {console.log("error occured!");}
    res.json(post);
  };
  
  var query={userID:req.params.id};
  User.findOneAndRemove(query, req.body,onSuccess );
});
module.exports = apiRouter;