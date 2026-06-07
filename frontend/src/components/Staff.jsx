import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { staffAPI } from '../api/client';

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStaff = async () => {
      setLoading(true);
      try {
        const response = await staffAPI.getAll();
        setStaff(response.data);
      } catch (error) {
        console.error('Error fetching staff:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  return (
    <section id="staff" className="py-20 bg-gradient-to-br from-amber-50 to-blush">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-header text-center"
        >
          Meet Our Professionals
        </motion.h2>

        {loading ? (
          <p className="text-center text-xl text-gray-600">Loading staff...</p>
        ) : (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.experience} years experience</p>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-500">⭐ {member.rating}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      member.availability === 'online' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'
                    }`}>
                      {member.availability}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Staff;
