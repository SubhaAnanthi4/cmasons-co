import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Textile<span className="text-yellow-300">Track</span>
        </div>
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-yellow-300 transition-colors ${
                location.pathname === link.path ? 'underline underline-offset-4' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
