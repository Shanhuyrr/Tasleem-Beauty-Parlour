const axios = require('axios');

// Gemini API configuration
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent';

// Array of sample images URLs (since we're simulating the Gemini image generation)
// In production, you would use actual Gemini API calls
const sampleBackgroundImages = {
  bridal: [
    'https://images.unsplash.com/photo-1530268729831-4be0ea18729d?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1505739998589-60d02dca39fa?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1631507261902-1e4f97cb9a0f?w=1200&h=600&fit=crop'
  ],
  grooming: [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=600&fit=crop'
  ],
  haircuts: [
    'https://images.unsplash.com/photo-1560256213-93b3e2e23cb6?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=600&fit=crop'
  ]
};

// Generate background image using Gemini
const generateBackgroundImage = async (req, res) => {
  try {
    const { category = 'bridal', style = 'professional' } = req.query;

    // Validate category
    const validCategories = Object.keys(sampleBackgroundImages);
    if (!validCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid category. Valid categories: ' + validCategories.join(', ')
      });
    }

    // Get random image from the category
    const images = sampleBackgroundImages[category];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // In production, you would call actual Gemini API like this:
    // const response = await axios.post(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    //   contents: [{
    //     parts: [{
    //       text: `Generate a professional ${category} salon background image with ${style} aesthetic. 
    //              The image should showcase ${category === 'bridal' ? 'bridal styling with elegant makeup' : 
    //              category === 'grooming' ? 'professional male grooming and haircut' : 
    //              'modern haircut techniques'}. 
    //              High quality, professional salon setting.`
    //     }]
    //   }]
    // });

    return res.status(200).json({
      success: true,
      data: {
        imageUrl: randomImage,
        category: category,
        style: style,
        prompt: `Professional ${category} salon background image`,
        generatedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error generating background image:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate background image',
      error: error.message
    });
  }
};

// Get multiple background images for a category
const getBackgroundImages = async (req, res) => {
  try {
    const { category = 'bridal', count = 3 } = req.query;

    // Validate category
    const validCategories = Object.keys(sampleBackgroundImages);
    if (!validCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid category. Valid categories: ' + validCategories.join(', ')
      });
    }

    // Get images from the category
    const images = sampleBackgroundImages[category];
    const selectedImages = images.slice(0, Math.min(count, images.length));

    return res.status(200).json({
      success: true,
      data: {
        category: category,
        images: selectedImages.map((url, idx) => ({
          id: idx + 1,
          url: url,
          category: category,
          type: 'background'
        }))
      }
    });
  } catch (error) {
    console.error('Error fetching background images:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch background images',
      error: error.message
    });
  }
};

// Get all available background image categories
const getImageCategories = async (req, res) => {
  try {
    const categories = Object.keys(sampleBackgroundImages).map(cat => ({
      name: cat,
      displayName: cat.charAt(0).toUpperCase() + cat.slice(1),
      count: sampleBackgroundImages[cat].length
    }));

    return res.status(200).json({
      success: true,
      data: {
        categories: categories,
        totalCategories: categories.length
      }
    });
  } catch (error) {
    console.error('Error fetching image categories:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch image categories',
      error: error.message
    });
  }
};

module.exports = {
  generateBackgroundImage,
  getBackgroundImages,
  getImageCategories
};
