import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10 mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-1">C.M.Arumuga Mudaliar Sons & Co</h4>
          <p className="text-sm text-gray-300">
            Crafting comfort since 1954.
          </p>
        </div>

    {/* Contact Info */}
<div className="flex space-x-5 text-lg text-white">
  <a href="tel:+919443290989" className="hover:text-blue-300 transition" aria-label="Phone">
    📞 +91 94432 90989
  </a>
  <a
    href="https://mail.google.com/mail/?view=cm&to=logu9443290989@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-300 transition"
    aria-label="Email"
  >
    ✉️ logu9443290989@gmail.com
  </a>
</div>




        {/* Copyright */}
        <div className="text-sm text-gray-300 text-center md:text-right">
          © {new Date().getFullYear()} C.M.A. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
