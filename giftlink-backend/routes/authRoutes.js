const express = require("express");
const router = express.Router();

const { connectToDatabase } = require("../models/db");

router.post("/login", async (req, res) => {
  try {
    const db = await connectToDatabase();

    const { username, password } = req.body;

    const user = await db.collection("users").findOne({
      username: username,
      password: password
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: user
    });

  } catch (error) {
    res.status(500).json({
      message: "Error finding user"
    });
  }
});

module.exports = router;