import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">C.M.A</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About Us</a>
          <a href="#products" className="hover:text-gray-300">Products</a>
          <a href="#contact" className="hover:text-gray-300">Contact Us</a>
          <a href="/login" className="bg-white text-blue-700 px-4 py-1 rounded hover:bg-gray-100 transition">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
