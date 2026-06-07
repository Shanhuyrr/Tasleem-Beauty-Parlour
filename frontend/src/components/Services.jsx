import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { serviceAPI } from '../api/client';

const Services = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState('female');
  const [loading, setLoading] = useState(false);

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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-header text-center"
        >
          Our Services
        </motion.h2>

        <div className="flex gap-6 justify-center mb-12">
          <button
            onClick={() => setCategory('female')}
            className={`px-8 py-2 rounded-full font-semibold transition ${
              category === 'female'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            👩 Female Services
          </button>
          <button
            onClick={() => setCategory('bridal')}
            className={`px-8 py-2 rounded-full font-semibold transition ${
              category === 'bridal'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            👰 Bridal Services
          </button>
          <button
            onClick={() => setCategory('male')}
            className={`px-8 py-2 rounded-full font-semibold transition ${
              category === 'male'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            👨 Male Services
          </button>
        </div>

        {loading ? (
          <p className="text-center text-xl text-gray-600">Loading services...</p>
        ) : (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="h-48 bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
                  {service.image ? (
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                  ) : (
                    <img src={`/assets/services/${service.category || 'default'}.svg`} alt={service.name} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-amber-600">
                      Rs. {service.price}
                    </span>
                    <span className="text-sm text-gray-600">{service.duration} mins</span>
                  </div>
                  <button className="w-full btn-primary">Book Now</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
