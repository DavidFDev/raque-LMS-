const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  items: [],
});

const CartModel = mongoose.model("orders", cartSchema);
module.exports = CartModel;
