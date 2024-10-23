var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var userService = require('./public/scripts/webapi/userService');
var productService = require('./public/scripts/webapi/productService');
var cropService = require('./public/scripts/webapi/cropService');
var diseaseService = require('./public/scripts/webapi/diseaseService');

// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect('mongodb://localhost/eCommerce')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var app = express();

//Set policy for cross site scripting  REST api invocation
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', userService);
app.use('/api/products', productService);
app.use('/api/crops', cropService);
app.use('/api/disease', diseaseService);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
module.exports = app;