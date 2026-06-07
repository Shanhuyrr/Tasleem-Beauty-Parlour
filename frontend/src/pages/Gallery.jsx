import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'haircut', title: 'Modern Fade', emoji: '✂️' },
    { id: 2, category: 'styling', title: 'Bridal Elegance', emoji: '👑' },
    { id: 3, category: 'color', title: 'Vibrant Colors', emoji: '🎨' },
    { id: 4, category: 'bridal', title: 'Bridal Styling', emoji: '💒' },
    { id: 5, category: 'haircut', title: 'Classic Cuts', emoji: '✨' },
    { id: 6, category: 'styling', title: 'Party Look', emoji: '🎉' },
    { id: 7, category: 'color', title: 'Color Treatment', emoji: '🌈' },
    { id: 8, category: 'bridal', title: 'Bride Makeup', emoji: '💐' },
    { id: 9, category: 'grooming', title: 'Grooming', emoji: '👨‍🦱' },
  ];

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif font-bold mb-4 text-gray-800">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600">
            Explore our latest work and get inspired
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-4 mb-16 flex-wrap"
        >
          {['all', 'haircut', 'styling', 'color', 'bridal', 'grooming'].map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-semibold transition capitalize ${
                filter === cat
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg'
                  : 'bg-white text-gray-800 border-2 border-amber-200 hover:border-amber-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="cursor-pointer group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="h-80 bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center relative overflow-hidden">
                <motion.span
                  className="text-8xl group-hover:scale-125 transition-transform"
                  whileHover={{ rotate: 10 }}
                >
                  {item.emoji}
                </motion.span>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <span className="text-white text-2xl font-bold">View</span>
                </motion.div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-amber-600 font-semibold capitalize">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-amber-400 transition"
              >
                ✕
              </button>
              <div className="h-96 md:h-full bg-gradient-to-br from-amber-200 to-amber-400 rounded-2xl flex items-center justify-center">
                <span className="text-9xl md:text-9xl">{selectedImage.emoji}</span>
              </div>
              <div className="bg-white p-8 rounded-b-2xl text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedImage.title}</h2>
                <p className="text-amber-600 font-semibold capitalize mb-6">{selectedImage.category}</p>
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700"
                  whileHover={{ scale: 1.05 }}
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

export default GalleryPage;
