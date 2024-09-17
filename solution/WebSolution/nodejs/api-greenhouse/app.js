/*
Creating a Node.js REST API for greenhouse automation involves 
setting up endpoints to control and 
monitor various aspects of a greenhouse, 
such as temperature, humidity, lighting, and irrigation.
*/

// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/temperature', require('./routes/temperature'));
app.use('/api/humidity', require('./routes/humidity'));
app.use('/api/lighting', require('./routes/lighting'));
app.use('/api/irrigation', require('./routes/irrigation'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/* 
7. Testing the API
Use tools like Postman or curl to test your API endpoints.

Get Temperature: GET http://localhost:5000/api/temperature
Set Temperature: POST http://localhost:5000/api/temperature with body { "temperature": 22 }
Get Humidity: GET http://localhost:5000/api/humidity
Set Humidity: POST http://localhost:5000/api/humidity with body { "humidity": 60 }
Get Lighting Status: GET http://localhost:5000/api/lighting
Toggle Lighting: POST http://localhost:5000/api/lighting with body { "lighting": true }
Get Irrigation Status: GET http://localhost:5000/api/irrigation
Toggle Irrigation: POST http://localhost:5000/api/irrigation with body { "irrigation": true }
*/