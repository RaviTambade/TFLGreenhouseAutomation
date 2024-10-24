// routes/humidity.js
const express = require('express');
const router = express.Router();
const Greenhouse = require('../models/Greenhouse');

// Get current humidity
router.get('/', async (req, res) => {
  try {
    const greenhouse = await Greenhouse.findOne();
    res.json({ humidity: greenhouse.humidity });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Set humidity
router.post('/', async (req, res) => {
  try {
    const { humidity } = req.body;
    const greenhouse = await Greenhouse.findOne();
    greenhouse.humidity = humidity;
    await greenhouse.save();
    res.json({ humidity: greenhouse.humidity });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
