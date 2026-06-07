const express = require('express');
const router = express.Router();
const { createCheckoutSession, confirmSession } = require('../controllers/paymentsController');
const { authenticate } = require('../middleware/auth');

router.post('/create-checkout-session', authenticate, createCheckoutSession);
router.post('/confirm-session', authenticate, confirmSession);

module.exports = router;
