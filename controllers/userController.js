const User = require('../models/User');


exports.signup = async (req, res) => {
  try {
    const { rollNo } = req.body;

    
    const existingUser = await User.findOne({ rollNo });
    if (existingUser) {
      return res.status(400).json({ message: 'A user with this rollNo already exists.' });
    }

   
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.signin = async (req, res) => {
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
};



