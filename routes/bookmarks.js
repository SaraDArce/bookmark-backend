const express = require("express");
const router = express.Router();

// Grab the controller functions
const { index, create, destroy, update } = require("../controllers/bookmarks");

//http://localhost:8000/bookmarks

// Get all bookmarks
router.get("/", index);

// Create a bookmark
router.post("/", create);

// Delete a bookmark
router.delete("/:id", destroy);

// Update a bookmark
router.put("/:id", update);

module.exports = router;
