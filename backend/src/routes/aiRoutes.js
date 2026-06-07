const express = require('express');
const router = express.Router();
const {
  generateBackgroundImage,
  getBackgroundImages,
  getImageCategories
} = require('../controllers/aiController');

// Get all available image categories
router.get('/categories', getImageCategories);

// Get multiple background images for a category
router.get('/backgrounds', getBackgroundImages);

// Generate a new background image using Gemini
router.get('/generate', generateBackgroundImage);

module.exports = router;
