const express = require('express');
const router = express.Router();
const PerformanceRecord = require('../models/PerformanceRecord');
const { auth, authorize } = require('../middleware/auth');

// Get all performance records
router.get('/', auth, async (req, res) => {
  try {
    const records = await PerformanceRecord.find().populate('employee', 'name avatar department');
    res.send(records);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Create new record (Admin/Manager only)
router.post('/', auth, authorize('admin', 'manager'), async (req, res) => {
  try {
    const record = new PerformanceRecord({
      ...req.body,
      reviewer: req.user._id
    });
    await record.save();
    res.status(201).send(record);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Get personal performance
router.get('/my', auth, async (req, res) => {
  try {
    const records = await PerformanceRecord.find({ employee: req.user._id });
    res.send(records);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
