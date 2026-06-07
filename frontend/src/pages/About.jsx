import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-20"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            About Tasleem
          </h1>
          <p className="text-xl md:text-2xl">
            Your trusted partner for beauty and grooming excellence
          </p>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tasleem Beauty Salon was founded with a vision to provide world-class beauty and grooming services to our community. With over a decade of experience, we've established ourselves as the premier destination for hair care, styling, and grooming.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of certified professionals is dedicated to delivering exceptional service, using only the finest products and the latest techniques to ensure your complete satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="h-96 bg-gradient-to-br from-amber-200 to-amber-400 rounded-2xl flex items-center justify-center"
            >
              <span className="text-9xl">💇</span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Mission */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-gray-800">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                icon: '⭐',
                desc: 'We strive for excellence in every service, ensuring the highest quality standards.'
              },
              {
                title: 'Customer Focus',
                icon: '❤️',
                desc: 'Your satisfaction is our priority. We listen to your needs and deliver personalized solutions.'
              },
              {
                title: 'Innovation',
                icon: '💡',
                desc: 'We stay updated with the latest trends and techniques in the beauty industry.'
              },
              {
                title: 'Professionalism',
                icon: '🎯',
                desc: 'Our team is trained, certified, and dedicated to providing professional service.'
              },
              {
                title: 'Integrity',
                icon: '✓',
                desc: 'We believe in honest communication and transparent pricing with all our clients.'
              },
              {
                title: 'Community',
                icon: '🤝',
                desc: 'We are committed to being an active part of our community and giving back.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl"
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-gray-800">
            Why Choose Tasleem?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              '👨‍💼 Experienced & Certified Professionals',
              '✨ Premium Quality Products Only',
              '📍 Modern & Clean Facilities',
              '⏰ Flexible Booking Schedule',
              '💰 Transparent & Affordable Pricing',
              '🎁 Loyalty Rewards Program',
              '📱 Easy Online Booking',
              '🌟 100% Satisfaction Guarantee'
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-6 p-4"
                whileHover={{ x: 10 }}
              >
                <div className="text-3xl flex-shrink-0">{item.split(' ')[0]}</div>
                <p className="text-lg text-gray-700">{item.substring(2)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-gray-800">
            Meet Our Expert Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Aisha Khan', specialty: 'Lead Stylist' },
              { name: 'Sara Ahmed', specialty: 'Hair Specialist' },
              { name: 'Fatima Hassan', specialty: 'Bridal Expert' },
              { name: 'Zara Malik', specialty: 'Grooming Specialist' }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                whileHover={{ y: -10 }}
              >
                <div className="w-full h-64 bg-gradient-to-br from-amber-200 to-amber-300 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-7xl">👩‍🦱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-semibold">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8 text-gray-800">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Have any questions? We'd love to hear from you. Contact us today!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl" whileHover={{ scale: 1.05 }}>
              <p className="text-3xl mb-3">📞</p>
              <p className="text-lg font-bold text-gray-800">Phone</p>
              <p className="text-gray-600">+92 300 1234567</p>
            </motion.div>
            <motion.div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl" whileHover={{ scale: 1.05 }}>
              <p className="text-3xl mb-3">📧</p>
              <p className="text-lg font-bold text-gray-800">Email</p>
              <p className="text-gray-600">info@tasleem.com</p>
            </motion.div>
            <motion.div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl" whileHover={{ scale: 1.05 }}>
              <p className="text-3xl mb-3">📍</p>
              <p className="text-lg font-bold text-gray-800">Location</p>
              <p className="text-gray-600">Wah Cantt, Punjab, Pakistan</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
