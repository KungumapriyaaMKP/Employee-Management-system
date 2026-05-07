const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    await user.save();
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Demo Bypass for Preview
    if (email === 'demo@performiq.com' && password === 'demo123') {
      const demoUser = {
        _id: 'demo_id_123',
        name: 'Demo Admin',
        email: 'demo@performiq.com',
        role: 'admin',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
      };
      const token = jwt.sign({ id: demoUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      return res.send({ user: demoUser, token });
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send({ error: 'Invalid login credentials' });
    }
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.send({ user, token });
  } catch (error) {
    // If DB is down, still allow demo login
    if (req.body.email === 'demo@performiq.com' && req.body.password === 'demo123') {
      const demoUser = {
        _id: 'demo_id_123',
        name: 'Demo Admin',
        email: 'demo@performiq.com',
        role: 'admin',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
      };
      const token = jwt.sign({ id: demoUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      return res.send({ user: demoUser, token });
    }
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
