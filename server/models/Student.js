const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  bio: { type: String },
  phone: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  otpSecret: { type: String, },
  isVerified: { type: Boolean, default: false, },
  createdAt: { type: Date, default: Date.now },
});

const StudentModel = mongoose.model("students", StudentSchema);
module.exports = StudentModel;
