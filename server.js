require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); 
const userRoutes = require('./routes/userRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); 
app.use(cookieParser());
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use('/products', productRoutes);
app.use('/users', userRoutes);


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));