import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-b bg-blue-100 from-blue-100 via-white to-blue-50 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-6">
          Welcome to Our Textile Shop System
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          This project is designed for a textile shop that manages dyeing operations.
        </p>

        <p className="text-md text-gray-600 mb-4">
          The system tracks how much material is provided for dyeing, how many batches are returned, and the amount of wastage during the process.
        </p>

        <p className="text-md text-gray-600 mb-4">
          We’ve already developed a desktop application for this, and now we’re building a modern web version using React.
        </p>

        <p className="text-md text-gray-600 mb-8">
          This website helps visualize and manage the dyeing process seamlessly and efficiently.
        </p>

        <a
          href="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Explore Our Products
        </a>
      </div>
    </div>
  );
};

export default Home;
