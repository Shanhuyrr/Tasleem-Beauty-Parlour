const express = require('express');
const {
  submitApplication,
  getAllApplications,
  updateApplicationStatus,
} = require('../controllers/jobController');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/', submitApplication);
router.get('/', authenticate, authorize(['admin']), getAllApplications);
router.put('/:id/status', authenticate, authorize(['admin']), updateApplicationStatus);

module.exports = router;
