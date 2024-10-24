var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var cropService = require('./public/scripts/webapi/cropService');
var diseaseService = require('./public/scripts/webapi/diseaseService');
var nutritionService = require('./public/scripts/webapi/nutritionService');
var pestService = require('./public/scripts/webapi/pestService');
var fertilizerService = require('./public/scripts/webapi/fertilizerService');
var requiredClimateService = require('./public/scripts/webapi/requiredClimateService');
var irrigationService = require('./public/scripts/webapi/irrigationService');
var pesticideService = require('./public/scripts/webapi/pesticideService');
var ingredientService = require('./public/scripts/webapi/ingredientService');
var solutionService = require('./public/scripts/webapi/solutionService');
var tankService = require('./public/scripts/webapi/tankService');
var yieldService = require('./public/scripts/webapi/yieldService');
var environmentService = require('./public/scripts/webapi/environmentService');
var tankScheduleService = require('./public/scripts/webapi/tankscheduleService');
var pestService = require('./public/scripts/webapi/pestService');
var inventoryService = require('./public/scripts/webapi/inventoryService');
var taskService = require('./public/scripts/webapi/taskService');
var solutionService = require('./public/scripts/webapi/solutionService');
var greenhouseService = require('./public/scripts/webapi/greenhouseService');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/eCommerce')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var app = express();

 
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api/crops', cropService);
app.use('/api/diseases', diseaseService);
app.use('/api/nutritions', nutritionService);
app.use('/api/pests', pestService);
app.use('/api/fertilizers',fertilizerService);
app.use('/api/requiredclimate',requiredClimateService);
app.use('/api/irrigations',irrigationService);
app.use('/api/pesticides',pesticideService);
app.use('/api/ingredients',ingredientService);
app.use('/api/tank',tankService);
app.use('/api/yields',yieldService);
app.use('/api/environments',environmentService);
app.use('api/environments/interval',environmentService);
app.use('api/environments/current',environmentService);
app.use('/api/tankschedule',tankScheduleService);
app.use('/api/store',inventoryService);
app.use('/api/task',taskService);
app.use('/api/solution',solutionService);
app.use('/api/greenhouse',greenhouseService);



app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
module.exports = app;