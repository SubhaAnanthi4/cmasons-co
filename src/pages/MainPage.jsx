import React from 'react';
import HeroSection from './HeroSection';
import WorkerCarousel from './ManufacturingProcess';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Footer from './Footer';
import { motion } from 'framer-motion';
//import MaterialList from './components/MaterialList';
//import WastageCalculator from './components/WastageCalculator';
//import ProductVisualization from './components/ProductVisualization';

const MainPage = () => {
  return (
    <div>
      {/* Navbar */}
      <motion.nav
        className="bg-blue-700 text-white px-6 py-4 shadow-lg fixed top-0 w-full z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-xl font-extrabold tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            C.M.A
          </motion.div>

          {/* Links */}
          <motion.div
            className="space-x-6 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            {['Home', 'About Us', 'Process', 'Our Collection', 'Contact'].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                className="relative group transition"
              >
                <span className="hover:text-gray-300">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="/login"
              className="bg-white text-blue-700 px-4 py-1 rounded hover:bg-gray-100 transition font-semibold"
            >
              Login
            </a>
          </motion.div>
        </div>
      </motion.nav>

      {/* Page Content */}
      <div className="pt-20"> {/* Adjusted for navbar height */}
        <section id="home">
          <HeroSection />
        </section>

        <section id="aboutus" className="pt-8">
          <About />
        </section>

        <section id="process" className="pt-8">
          <WorkerCarousel />
        </section>

        <section id="ourcollection" className="pt-8">
          <Products />
        </section>

        <section id="contact" className="pt-8">
          <Contact />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
