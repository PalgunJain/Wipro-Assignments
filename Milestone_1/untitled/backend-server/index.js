const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./database");
const Product = require("./models/Product");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

// Route: Fetch All Products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Route: Add a Single or Multiple Products
app.post("/products", async (req, res) => {
  try {
    const products = req.body;

    if (Array.isArray(products)) {
      const newProducts = await Product.insertMany(products);
      return res.status(201).json({ message: "Products added successfully", data: newProducts });
    }

    const newProduct = await Product.create(products);
    return res.status(201).json({ message: "Product added successfully", data: newProduct });

  } catch (error) {
    res.status(500).json({ message: "Failed to add product(s)", error: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
