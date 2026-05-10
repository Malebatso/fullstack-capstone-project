const express = require("express");
const router = express.Router();

const { connectToDatabase } = require("../models/db");

// Search gifts by category
router.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const category = req.query.category;

    const query = category ? { category: category } : {};

    const gifts = await db.collection("gifts").find(query).toArray();

    res.json(gifts);
  } catch (error) {
    res.status(500).json({ error: "Failed to search gifts" });
  }
});

module.exports = router;