import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceAPI } from '../api/client';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState('female');
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await serviceAPI.getAll(category);
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [category]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif font-bold mb-4 text-gray-800">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Discover our complete range of professional beauty and grooming services
          </p>
        </motion.div>

        <div className="flex gap-6 justify-center mb-16 flex-wrap">
          {['female', 'male', 'bridal', 'special'].map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-8 py-3 rounded-full font-semibold transition text-lg capitalize ${
                category === cat
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg'
                  : 'bg-white text-gray-800 border-2 border-amber-200 hover:border-amber-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat === 'female' && '👩'} {cat === 'male' && '👨'} {cat === 'bridal' && '💒'} {cat === 'special' && '✨'} {cat}
            </motion.button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-16 h-16 border-4 border-amber-200 border-t-amber-600 rounded-full mx-auto mb-4"
            />
            <p className="text-xl text-gray-600">Loading services...</p>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No services available in this category</p>
          </div>
        ) : (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="h-48 bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center group-hover:from-amber-300 group-hover:to-amber-500 transition">
                  <motion.span 
                    className="text-7xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    ✨
                  </motion.span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-gray-800">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-bold text-amber-600">
                      Rs. {service.price}
                    </span>
                    <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                      {service.duration} mins
                    </span>
                  </div>
                  <Link to={`/booking/${service._id}`}>
                    <motion.button
                      className="w-full btn-primary bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Service Detail Modal */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-4xl font-serif font-bold text-gray-800">
                  {selectedService.name}
                </h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-2xl text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>

              <div className="h-60 bg-gradient-to-br from-amber-200 to-amber-400 rounded-xl flex items-center justify-center mb-6">
                <span className="text-8xl">✨</span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Price</p>
                  <p className="text-3xl font-bold text-amber-600">
                    Rs. {selectedService.price}
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Duration</p>
                  <p className="text-3xl font-bold text-amber-600">
                    {selectedService.duration} mins
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Category</p>
                  <p className="text-2xl font-bold text-amber-600 capitalize">
                    {selectedService.category}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to={`/booking/${selectedService._id}`} className="flex-1">
                  <motion.button
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-lg font-bold text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                  </motion.button>
                </Link>
                <motion.button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-lg font-bold text-lg hover:bg-gray-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
