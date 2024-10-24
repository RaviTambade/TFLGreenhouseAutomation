// routes/irrigation.js
const express = require('express');
const router = express.Router();
const Greenhouse = require('../models/Greenhouse');

// Get current irrigation status
router.get('/', async (req, res) => {
  try {
    const greenhouse = await Greenhouse.findOne();
    res.json({ irrigation: greenhouse.irrigation });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Toggle irrigation
router.post('/', async (req, res) => {
  try {
    const { irrigation } = req.body;
    const greenhouse = await Greenhouse.findOne();
    greenhouse.irrigation = irrigation;
    await greenhouse.save();
    res.json({ irrigation: greenhouse.irrigation });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
