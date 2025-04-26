import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center text-white text-center px-6 bg-transparent">
      {/* Only Content - No Background */}
      <motion.div
        className="relative z-10 bg-black bg-opacity-40 p-10 rounded-xl shadow-xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Bringing Comfort to Homes Since 1954
        </motion.h1>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Discover our journey of quality, trust, and timeless textile traditions.
        </motion.p>

        <motion.a
          href="#products"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ✨ View Our Collections
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HeroSection;
