import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const galleryItems = [
    { title: 'Bridal Makeup', emoji: '💄' },
    { title: 'Haircut Styles', emoji: '✂️' },
    { title: 'Nail Art', emoji: '💅' },
    { title: 'Skincare', emoji: '✨' },
    { title: 'Hair Color', emoji: '🎨' },
    { title: 'Facial Treatment', emoji: '🧖' },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-header text-center"
        >
          Gallery
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition"
            >
              <span className="text-6xl mb-4">{item.emoji}</span>
              <h3 className="text-xl font-serif font-bold text-gray-800">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
