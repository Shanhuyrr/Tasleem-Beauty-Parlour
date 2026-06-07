import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-3xl font-serif font-bold text-amber-500 mb-4">✨ Tasleem</h3>
            <p className="text-gray-400 mb-4">Premium beauty and grooming services with professional expertise.</p>
            <div className="flex gap-4">
              {[
                { icon: '📱', url: '#' },
                { icon: '📧', url: '#' },
                { icon: '📍', url: '#' }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.url}
                  className="text-2xl hover:text-amber-500 transition"
                  whileHover={{ scale: 1.2 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-6 text-lg text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-amber-500 transition font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-500 transition font-semibold">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-500 transition font-semibold">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500 transition font-semibold">
                  About Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-6 text-lg text-white">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-amber-500 transition font-semibold cursor-pointer">
                💇 Hair Cutting & Styling
              </li>
              <li className="hover:text-amber-500 transition font-semibold cursor-pointer">
                💒 Bridal Services
              </li>
              <li className="hover:text-amber-500 transition font-semibold cursor-pointer">
                👨‍🦱 Grooming
              </li>
              <li className="hover:text-amber-500 transition font-semibold cursor-pointer">
                ✨ Coloring & Treatments
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold mb-6 text-lg text-white">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">📞</span>
                <span className="font-semibold">+92 300 1234567</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">📧</span>
                <span className="font-semibold">info@tasleem.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">📍</span>
                <span className="font-semibold">123 Main Street, Karachi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">⏰</span>
                <span className="font-semibold">10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2024 Tasleem Beauty Salon. All rights reserved.
              </p>
            </div>
            <div className="flex justify-center md:justify-end gap-6">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition font-semibold">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition font-semibold">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition font-semibold">
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
