// routes/temperature.js
const express = require('express');
const router = express.Router();
const Greenhouse = require('../models/Greenhouse');

// Get current temperature
router.get('/', async (req, res) => {
  try {
    const greenhouse = await Greenhouse.findOne();
    res.json({ temperature: greenhouse.temperature });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Set temperature
router.post('/', async (req, res) => {
  try {
    const { temperature } = req.body;
    const greenhouse = await Greenhouse.findOne();
    greenhouse.temperature = temperature;
    await greenhouse.save();
    res.json({ temperature: greenhouse.temperature });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
