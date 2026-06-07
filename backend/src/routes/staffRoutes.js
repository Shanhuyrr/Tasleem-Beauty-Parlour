const express = require('express');
const {
  getAllStaff,
  getStaffById,
  updateStaffAvailability,
} = require('../controllers/staffController');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllStaff);
router.get('/:id', getStaffById);
router.put('/:id/availability', authenticate, authorize(['admin', 'staff']), updateStaffAvailability);

module.exports = router;
