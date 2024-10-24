// routes/lighting.js
const express = require('express');
const router = express.Router();
const Greenhouse = require('../models/Greenhouse');

// Get current lighting status
router.get('/', async (req, res) => {
  try {
    const greenhouse = await Greenhouse.findOne();
    res.json({ lighting: greenhouse.lighting });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Toggle lighting
router.post('/', async (req, res) => {
  try {
    const { lighting } = req.body;
    const greenhouse = await Greenhouse.findOne();
    greenhouse.lighting = lighting;
    await greenhouse.save();
    res.json({ lighting: greenhouse.lighting });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
