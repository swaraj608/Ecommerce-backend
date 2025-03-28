const express = require('express');
const User = require('../models/User'); 

const router = express.Router();


router.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.post('/signin', async (req, res) => {
  const { rollNo, password } = req.body;
  try {
    const user = await User.findOne({ rollNo, password });
    if (user) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;