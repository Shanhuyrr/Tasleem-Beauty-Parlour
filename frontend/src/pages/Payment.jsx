import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { bookingAPI, paymentsAPI } from '../api/client';

const Payment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const bookingId = searchParams.get('bookingId');
  const [booking, setBooking] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('easypaisa');
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  useEffect(() => {
    if (bookingId) {
      setLoading(false);
      setBooking({
        _id: bookingId,
        totalAmount: 5000,
        customerName: 'Customer',
        serviceDetails: 'Service Booking'
      });
    } else {
      setLoading(false);
      setError('No booking found');
    }
  }, [bookingId]);

  const paymentMethods = [
    {
      id: 'easypaisa',
      name: 'EasyPaisa',
      icon: '📱',
      description: 'Pay via EasyPaisa mobile account',
      color: 'from-purple-100 to-purple-50',
      borderColor: 'border-purple-300'
    },
    {
      id: 'jazzcash',
      name: 'JazzCash',
      icon: '💳',
      description: 'Pay via JazzCash mobile wallet',
      color: 'from-red-100 to-red-50',
      borderColor: 'border-red-300'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: '🏦',
      description: 'Direct bank account transfer',
      color: 'from-blue-100 to-blue-50',
      borderColor: 'border-blue-300'
    },
    {
      id: 'card',
      name: 'Credit / Debit Card',
      icon: '💳',
      description: 'Pay securely with your card (Stripe)',
      color: 'from-yellow-100 to-yellow-50',
      borderColor: 'border-yellow-300'
    },
    {
      id: 'cash',
      name: 'Cash Payment',
      icon: '💵',
      description: 'Pay in cash at the salon',
      color: 'from-green-100 to-green-50',
      borderColor: 'border-green-300'
    }
  ];

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError('');

    try {
      if (paymentMethod === 'card') {
        // Create Stripe checkout session on server and redirect
        const resp = await paymentsAPI.createCheckoutSession({ bookingId });
        if (resp.data?.url) {
          window.location.href = resp.data.url;
          return;
        } else {
          throw new Error('Failed to create checkout session');
        }
      }
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      const paymentData = {
        bookingId,
        method: paymentMethod,
        amount: booking?.totalAmount,
        status: 'completed',
        timestamp: new Date().toISOString()
      };

      // In a real app, you would send this to your backend
      console.log('Payment processed:', paymentData);

      setSuccess(true);
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 3000);
    } catch (err) {
      setError('Payment processing failed. Please try again.');
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-16 h-16 border-4 border-amber-200 border-t-amber-600 rounded-full"
        />
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-700 mb-6">{error}</p>
          <button
            onClick={() => navigate('/booking')}
            className="bg-amber-600 text-white px-8 py-3 rounded-lg font-bold"
          >
            Back to Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif font-bold mb-4 text-gray-800">
            Complete Payment
          </h1>
          <p className="text-xl text-gray-600">
            Choose your preferred payment method to confirm your booking
          </p>
        </motion.div>

        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-8 bg-green-100 border-3 border-green-500 rounded-2xl text-center max-w-2xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-6xl mb-4"
            >
              ✓
            </motion.div>
            <p className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</p>
            <p className="text-green-600">Your booking has been confirmed. Redirecting...</p>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-6 bg-red-100 border-2 border-red-500 rounded-xl text-center"
          >
            <p className="text-xl font-bold text-red-700">✕ {error}</p>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Payment Method Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg mb-8"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Select Payment Method</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <motion.div
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition ${
                      paymentMethod === method.id
                        ? `bg-gradient-to-br ${method.color} ${method.borderColor} border-current`
                        : `bg-white border-gray-200 hover:border-gray-300`
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">{method.icon}</div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">{method.name}</h4>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Payment Details Form */}
            <motion.form
              onSubmit={handlePayment}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg space-y-6"
            >
              {paymentMethod === 'easypaisa' && (
                <div className="space-y-6 p-6 bg-purple-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      EasyPaisa Account Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your EasyPaisa number (03xxxxxxxxx)"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:border-purple-600 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg text-sm text-purple-800">
                    <p className="font-semibold mb-2">How to pay with EasyPaisa:</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Go to EasyPaisa app or website</li>
                      <li>Select "Send Money"</li>
                      <li>Enter our salon account: 0300-XXXXX</li>
                      <li>Enter amount: Rs. {booking?.totalAmount}</li>
                      <li>Confirm and complete payment</li>
                    </ol>
                  </div>
                </div>
              )}

              {paymentMethod === 'jazzcash' && (
                <div className="space-y-6 p-6 bg-red-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      JazzCash Account Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your JazzCash number (03xxxxxxxxx)"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-red-300 rounded-lg focus:border-red-600 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="bg-red-100 p-4 rounded-lg text-sm text-red-800">
                    <p className="font-semibold mb-2">How to pay with JazzCash:</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Dial *141# from your Jazz SIM</li>
                      <li>Select "Send Money"</li>
                      <li>Enter our salon account: 0300-XXXXX</li>
                      <li>Enter amount: Rs. {booking?.totalAmount}</li>
                      <li>Confirm with your PIN</li>
                    </ol>
                  </div>
                </div>
              )}

              {paymentMethod === 'bank' && (
                <div className="space-y-6 p-6 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 p-4 rounded-lg text-sm text-blue-800 mb-6">
                    <p className="font-semibold mb-3">Bank Transfer Details:</p>
                    <div className="space-y-2">
                      <p><strong>Bank Name:</strong> HBL (Habib Bank Limited)</p>
                      <p><strong>Account Name:</strong> Tasleem Beauty Salon</p>
                      <p><strong>Account Number:</strong> 1234567890123</p>
                      <p><strong>IBAN:</strong> PK12HBLC0001234567890123</p>
                      <p><strong>Amount:</strong> Rs. {booking?.totalAmount}</p>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg text-sm text-blue-800">
                    <p className="font-semibold mb-2">Payment Instructions:</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Use your bank's online banking or ATM</li>
                      <li>Enter the account details above</li>
                      <li>Complete the transfer</li>
                      <li>Keep your transaction receipt</li>
                      <li>We'll confirm once payment is received</li>
                    </ol>
                  </div>
                </div>
              )}

              {paymentMethod === 'cash' && (
                <div className="space-y-6 p-6 bg-green-50 rounded-lg">
                  <div className="bg-green-100 p-6 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-700 mb-3">Rs. {booking?.totalAmount}</p>
                    <p className="text-green-800 font-semibold">Pay this amount in cash at the salon</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg text-sm text-green-800">
                    <p className="font-semibold mb-2">Cash Payment:</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Your booking is confirmed</li>
                      <li>Pay the amount when you visit the salon</li>
                      <li>No online payment needed</li>
                      <li>Receipt will be provided at the salon</li>
                    </ol>
                  </div>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={processing}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:from-amber-700 hover:to-amber-800 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {processing ? '⏳ Processing Payment...' : `Confirm Payment - Rs. ${booking?.totalAmount}`}
              </motion.button>
            </motion.form>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg h-fit sticky top-24"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h3>
            
            <div className="space-y-6 mb-8 border-b pb-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Booking ID</p>
                <p className="font-mono text-sm text-amber-600 font-bold">{bookingId}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Service</p>
                <p className="text-lg font-bold text-gray-800">{booking?.serviceDetails}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Customer Name</p>
                <p className="text-lg font-bold text-gray-800">{booking?.customerName}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg mb-6">
              <p className="text-sm text-gray-600 mb-2">Total Amount</p>
              <p className="text-5xl font-bold text-amber-600">Rs. {booking?.totalAmount}</p>
            </div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-center text-sm text-gray-600"
            >
              <p>✓ Secure Payment Gateway</p>
              <p>✓ 100% Secured Transaction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
