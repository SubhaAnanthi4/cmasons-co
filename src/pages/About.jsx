import React from 'react';
import { motion } from 'framer-motion';

// Importing images
import founder from '../photos/founder.jpg';
import signboard from '../photos/signboard.jpg';
import prods from '../photos/products-about.jpg';
import digital from '../photos/digitallegacy.jpg'; // Use any relevant image
//import digital from './photos/digital.jpg'; // Use any relevant image

const timeline = [
  {
    year: '1954',
    title: 'Founded by Shri Arumuga Mudaliar',
    description: 'Started with a vision to redefine comfort textiles in India.',
    image: founder,
  },
  {
    year: '1980s',
    title: 'Expansion & Modernization',
    description: 'Expanded operations and introduced modern dyeing technology.',
    image: signboard,
  },
  {
    year: '2000s',
    title: 'Diversified Products',
    description: 'Launched home essentials for every room – Kitchen, Bedroom, Living Room, and more.',
    image: prods,
  },
  {
    year: 'Now',
    title: 'Digital Legacy',
    description: 'Building a strong digital presence to showcase our legacy, values, and connect with our customers online.',
    image: digital,
  },
];

const About = () => {
  return (
    <div className="bg-white py-20 px-6 max-w-6xl mx-auto" id="about">
      <motion.h2
        className="text-4xl font-extrabold text-center text-blue-800 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h2>

      <motion.p
        className="text-gray-700 mb-16 text-lg text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Started in 1954 by Shri Arumuga Mudaliar, our textile shop has grown from a humble store to a trusted name in comfort and quality.
      </motion.p>

      <div className="space-y-16">
        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            className="md:flex md:items-center md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2">
              <h3 className="text-blue-700 font-bold text-xl mb-2">
                {item.year} – {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
