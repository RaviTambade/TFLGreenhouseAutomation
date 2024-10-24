// models/Greenhouse.js
const mongoose = require('mongoose');

const GreenhouseSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    default: 20,
  },
  humidity: {
    type: Number,
    default: 50,
  },
  lighting: {
    type: Boolean,
    default: false,
  },
  irrigation: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Greenhouse', GreenhouseSchema);
