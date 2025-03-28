const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
  name: { type: String, required: true },
  fatherName: String,
  dob: Date,
  branch: String,
  rollNo: { type: String, required: true, unique: true },
  section: String,
  address: String,
  mobileNo: String,
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);