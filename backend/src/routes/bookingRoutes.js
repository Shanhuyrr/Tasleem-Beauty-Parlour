const express = require('express');
const {
  createBooking,
  getBookings,
  updateBookingStatus,
  cancelBooking,
} = require('../controllers/bookingController');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticate, createBooking);
router.get('/', authenticate, getBookings);
router.put('/:id/status', authenticate, authorize(['admin']), updateBookingStatus);
router.put('/:id/cancel', authenticate, cancelBooking);

module.exports = router;
