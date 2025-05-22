

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-white py-20 px-6" id="contact">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-800 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          className="space-y-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Map and Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4 text-lg">📧 Email: logu9443290989@gmail.com</p>
          <p className="text-gray-600 mb-6 text-lg">📍 Location: 74, Rathinam Salai, Karur, Tamil Nadu</p>
          <iframe
  className="w-full h-[450px] rounded-xl border-2 border-blue-300 shadow-lg"
  src="https://www.google.com/maps/embed?pb=!4v1744375632414!6m8!1m7!1s7vBQthSl7sFHy-53zVpDig!2m2!1d10.96475620976441!2d78.08255151016489!3f352.4607649167594!4f0!5f0.7820865974627469"
  allowFullScreen=""
  loading="lazy"
  title="Karur Textile Shop - Street View"
  referrerPolicy="no-referrer-when-downgrade"
/>


        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
