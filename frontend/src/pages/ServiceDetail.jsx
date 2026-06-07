import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { serviceAPI } from '../api/client';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await serviceAPI.getById(id);
        setService(response.data);
      } catch (err) {
        setError('Failed to load service details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchService();
    }
  }, [id]);

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

  if (error || !service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-2xl text-gray-700 mb-6">{error || 'Service not found'}</p>
          <Link to="/services">
            <motion.button
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Back to Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.button
          onClick={() => navigate('/services')}
          className="mb-8 flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold"
          whileHover={{ x: -5 }}
        >
          ← Back to Services
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="h-96 bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
            <motion.span
              className="text-9xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              ✨
            </motion.span>
          </div>

          <div className="p-12">
            <div className="mb-8">
              <h1 className="text-5xl font-serif font-bold text-gray-800 mb-4">
                {service.name}
              </h1>
              <p className="text-2xl text-amber-600 font-semibold mb-6 capitalize">
                {service.category} Services
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12 py-8 border-y-2 border-amber-100">
              <motion.div
                className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-gray-600 text-sm font-semibold mb-2">PRICE</p>
                <p className="text-4xl font-bold text-amber-600">Rs. {service.price}</p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-gray-600 text-sm font-semibold mb-2">DURATION</p>
                <p className="text-4xl font-bold text-amber-600">{service.duration}</p>
                <p className="text-gray-600 text-sm">Minutes</p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-gray-600 text-sm font-semibold mb-2">CATEGORY</p>
                <p className="text-2xl font-bold text-amber-600 capitalize">{service.category}</p>
              </motion.div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h3>
              <motion.div
                className="grid md:grid-cols-2 gap-4"
                variants={{ container: { staggerChildren: 0.1 } }}
                initial="hidden"
                animate="visible"
              >
                {[
                  'Professional consultation',
                  'Quality products used',
                  'Experienced stylist',
                  'Customized for you',
                  'Post-service care tips',
                  'Satisfaction guaranteed'
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-green-50 rounded-lg"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <span className="text-2xl">✓</span>
                    <span className="text-gray-700 font-semibold">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="flex gap-4">
              <Link to={`/booking/${service._id}`} className="flex-1">
                <motion.button
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(180, 83, 9, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book This Service
                </motion.button>
              </Link>
              <motion.button
                onClick={() => navigate('/services')}
                className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-xl font-bold text-lg hover:bg-gray-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
