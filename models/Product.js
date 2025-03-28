const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: String,
  image: String,
  rating: Number,
  discount: Number,
  offerprice: Number,
  reviews: [String]
});

module.exports = mongoose.model('Product', productSchema);