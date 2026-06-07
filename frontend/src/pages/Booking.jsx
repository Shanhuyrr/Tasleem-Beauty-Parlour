import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { serviceAPI, bookingAPI, staffAPI } from '../api/client';

const Booking = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [staff, setStaff] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesRes = await serviceAPI.getAll('all');
        setServices(servicesRes.data);
        
        const staffRes = await staffAPI.getAll();
        setStaff(staffRes.data);

        if (serviceId) {
          const selected = servicesRes.data.find(s => s._id === serviceId);
          setSelectedService(selected);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load booking data');
      }
    };

    fetchData();
  }, [serviceId]);

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
    '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30'
  ];

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const nextMonth = new Date();
    nextMonth.setDate(nextMonth.getDate() + 30);
    return nextMonth.toISOString().split('T')[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!selectedService || !selectedStaff || !selectedDate || !selectedTime || !customerName || !customerPhone) {
        setError('Please fill in all required fields');
        setLoading(false);
        return;
      }

      const bookingData = {
        serviceId: selectedService._id,
        staffId: selectedStaff,
        customerName,
        customerPhone,
        customerEmail,
        bookingDate: selectedDate,
        bookingTime: selectedTime,
        notes,
        totalAmount: selectedService.price
      };

      const response = await bookingAPI.create(bookingData);
      
      if (response.data) {
        setSuccess(true);
        setTimeout(() => {
          navigate(`/payment?bookingId=${response.data._id}`);
        }, 2000);
      }
    } catch (err) {
      console.error('Booking error:', err);
      setError(err.response?.data?.message || 'Failed to create booking');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif font-bold mb-4 text-gray-800">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600">
            Choose your service, date, time, and our expert stylist
          </p>
        </motion.div>

        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-6 bg-green-100 border-2 border-green-500 rounded-xl text-center"
          >
            <p className="text-xl font-bold text-green-700">✓ Booking created successfully!</p>
            <p className="text-green-600">Redirecting to payment...</p>
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
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            {/* Service Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">1. Select Service</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <motion.div
                    key={service._id}
                    onClick={() => setSelectedService(service)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                      selectedService?._id === service._id
                        ? 'border-amber-600 bg-amber-50'
                        : 'border-gray-200 bg-white hover:border-amber-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-bold text-lg text-gray-800">{service.name}</h4>
                    <p className="text-sm text-gray-600">Rs. {service.price}</p>
                    <p className="text-sm text-gray-600">{service.duration} mins</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Date Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">2. Select Date</h3>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={getMinDate()}
                max={getMaxDate()}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg"
                required
              />
              {selectedDate && (
                <p className="mt-3 text-sm text-gray-600">
                  Selected: {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              )}
            </motion.div>

            {/* Time Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">3. Select Time</h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {timeSlots.map((time) => (
                  <motion.button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 rounded-lg font-semibold transition ${
                      selectedTime === time
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-amber-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Staff Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">4. Select Stylist</h3>
              <div className="space-y-3">
                {staff.map((member) => (
                  <motion.label
                    key={member._id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition flex items-center gap-4 ${
                      selectedStaff === member._id
                        ? 'border-amber-600 bg-amber-50'
                        : 'border-gray-200 hover:border-amber-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <input
                      type="radio"
                      name="staff"
                      value={member._id}
                      checked={selectedStaff === member._id}
                      onChange={(e) => setSelectedStaff(e.target.value)}
                      className="w-5 h-5"
                    />
                    <div>
                      <p className="font-bold text-gray-800">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.specialty}</p>
                    </div>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Customer Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">5. Your Details</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none"
                />
                <textarea
                  placeholder="Special requests or notes (optional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none"
                />
              </div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:from-amber-700 hover:to-amber-800 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Processing...' : 'Continue to Payment'}
            </motion.button>
          </form>

          {/* Summary */}
          {selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg h-fit sticky top-24"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Booking Summary</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <p className="text-sm text-gray-600 mb-2">Service</p>
                  <p className="text-lg font-bold text-gray-800">{selectedService.name}</p>
                </div>

                {selectedDate && (
                  <div className="border-b pb-4">
                    <p className="text-sm text-gray-600 mb-2">Date</p>
                    <p className="text-lg font-bold text-gray-800">
                      {new Date(selectedDate).toLocaleDateString()}
                    </p>
                  </div>
                )}

                {selectedTime && (
                  <div className="border-b pb-4">
                    <p className="text-sm text-gray-600 mb-2">Time</p>
                    <p className="text-lg font-bold text-gray-800">{selectedTime}</p>
                  </div>
                )}

                {selectedStaff && (
                  <div className="border-b pb-4">
                    <p className="text-sm text-gray-600 mb-2">Stylist</p>
                    <p className="text-lg font-bold text-gray-800">
                      {staff.find(s => s._id === selectedStaff)?.name}
                    </p>
                  </div>
                )}

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Duration</p>
                  <p className="text-lg font-bold text-gray-800 mb-4">
                    {selectedService.duration} minutes
                  </p>

                  <p className="text-sm text-gray-600 mb-2">Total Amount</p>
                  <p className="text-4xl font-bold text-amber-600">
                    Rs. {selectedService.price}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
