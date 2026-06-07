import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AIBackground from './AIBackground';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
    >
      {/* Background with AI-generated image */}
      <div className="absolute inset-0 z-0">
        <AIBackground category="bridal" style="professional" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to <span className="text-amber-400">Tasleem</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Premium beauty and grooming services for the modern woman and man. Experience luxury, elegance, and transformation.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/booking">
              <motion.button
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Appointment
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                className="bg-white/20 backdrop-blur-sm text-white px-12 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            {[
              { icon: '👨‍⚕️', label: 'Experts' },
              { icon: '✨', label: 'Premium' },
              { icon: '⭐', label: 'Rated' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Stats/Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden md:block"
        >
          <div className="space-y-6">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '10+', label: 'Years Experience' },
              { number: '4.9/5', label: 'Rating' },
              { number: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <p className="text-4xl font-bold text-amber-400 mb-2">{stat.number}</p>
                <p className="text-lg text-gray-100 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white text-2xl cursor-pointer"
      >
        ↓
      </motion.div>
    </motion.section>
  );
};

export default Hero;
