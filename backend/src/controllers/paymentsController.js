require('dotenv').config();
const stripeKey = process.env.STRIPE_SECRET_KEY;
let stripe;
if (stripeKey) {
  stripe = require('stripe')(stripeKey);
}

const Booking = require('../models/Booking');
const Payment = require('../models/Payment');

const createCheckoutSession = async (req, res) => {
  try {
    if (!stripe) return res.status(500).json({ message: 'Stripe not configured' });

    const { bookingId } = req.body;
    const booking = await Booking.findById(bookingId).populate('serviceId');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    const amount = Math.round((booking.totalPrice || booking.totalAmount || booking.amount) * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'pkr',
            product_data: { name: `Booking - ${booking.serviceId?.name || 'Service'}` },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/payment-success?session_id={CHECKOUT_SESSION_ID}&bookingId=${bookingId}`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/payment?bookingId=${bookingId}`,
    });

    // create a pending payment record
    await Payment.create({ bookingId, userId: booking.userId, amount: amount / 100, method: 'card', status: 'pending', transactionId: session.id });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ message: error.message });
  }
};

const confirmSession = async (req, res) => {
  try {
    if (!stripe) return res.status(500).json({ message: 'Stripe not configured' });

    const { sessionId, bookingId } = req.body;
    if (!sessionId || !bookingId) return res.status(400).json({ message: 'Missing sessionId or bookingId' });

    const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ['payment_intent'] });
    if (!session) return res.status(404).json({ message: 'Session not found' });

    const paymentStatus = session.payment_status === 'paid' ? 'completed' : 'failed';

    // update payment record
    await Payment.findOneAndUpdate({ transactionId: sessionId }, { status: paymentStatus, completedAt: paymentStatus === 'completed' ? new Date() : null });

    if (paymentStatus === 'completed') {
      // mark booking as paid
      await Booking.findByIdAndUpdate(bookingId, { status: 'confirmed', paid: true });
    }

    res.json({ status: paymentStatus, session });
  } catch (error) {
    console.error('Confirm session error:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCheckoutSession, confirmSession };
