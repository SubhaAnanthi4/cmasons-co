import React from 'react';
import { motion } from 'framer-motion';
import kitchen1 from '../photos/kitchentowel.jpg';
import kitchen2 from '../photos/kitchen2.jpg';
import kitchen3 from '../photos/potholders.jpeg';

import bedroom1 from '../photos/handtowel.jpeg';
import bedroom2 from'../photos/bedsheets1.jpg';
import bedroom3 from'../photos/bedsheets.jpeg';

import living1 from '../photos/curtainslivingroom.jpeg';
import living2 from'../photos/livingcushions.jpg';
import living3 from '../photos/tablemats.jpg';

const kitchenImages = [
  kitchen1,kitchen2,kitchen3
];

const bedroomImages = [
  bedroom1, bedroom2, bedroom3  
];

const livingImages = [
  living1, living2, living3 
];

const Section = ({ title, images }) => (
  <div className="mb-16">
    <motion.h3
      className="text-3xl font-semibold text-blue-800 text-center mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h3>

    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {images.map((img, idx) => (
        <motion.div
          key={idx}
          className="overflow-hidden rounded-2xl shadow-lg group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={img}
            alt={`${title} ${idx + 1}`}
            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
        </motion.div>
      ))}
    </div>
  </div>
);

const Products = () => {
  return (
    <div className="bg-blue-50 py-20 px-6" id="products">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-900 mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Our Creations
      </motion.h2>

      <Section title="Kitchen Essentials" images={kitchenImages} />
      <Section title="Bedroom Essentials" images={bedroomImages} />
      <Section title="Living Room Accents" images={livingImages} />
    </div>
  );
};

export default Products;
