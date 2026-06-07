import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Staff from '../components/Staff';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <Staff />
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl font-serif font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Why Choose Tasleem?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Experience premium beauty services with our expert team, modern facilities, and commitment to your satisfaction.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '👨‍⚕️', title: 'Expert Professionals', desc: 'Certified and experienced stylists' },
              { icon: '✨', title: 'Premium Products', desc: 'High-quality, certified products' },
              { icon: '🏆', title: 'Best Service', desc: 'Customer satisfaction guaranteed' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <Link to="/booking">
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Appointment Now
            </motion.button>
          </Link>
        </div>
      </motion.section>
      
      <Gallery />
    </div>
  );
};

export default Home;
