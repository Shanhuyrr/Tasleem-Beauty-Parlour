import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { aiAPI } from '../api/client';

const AIBackground = ({ category = 'bridal', style = 'professional' }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        setLoading(true);
        const response = await aiAPI.generateBackgroundImage(category, style);
        if (response.data && response.data.data.imageUrl) {
          setBackgroundImage(response.data.data.imageUrl);
        }
      } catch (err) {
        console.error('Error fetching background image:', err);
        setError('Failed to load background');
      } finally {
        setLoading(false);
      }
    };

    fetchBackgroundImage();
  }, [category, style]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-16 h-16 border-4 border-white border-t-amber-600 rounded-full"
          />
        </div>
      )}

      {backgroundImage && (
        <motion.img
          src={backgroundImage}
          alt={`${category} background`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />
      )}

      {error && !backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400" />
      )}

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default AIBackground;
