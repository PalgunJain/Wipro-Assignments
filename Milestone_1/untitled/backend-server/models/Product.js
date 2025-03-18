const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true }, // Custom Product ID
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  availableQuantity: { type: Number, default: 0 }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
