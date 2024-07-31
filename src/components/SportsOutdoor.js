// src/components/SportsOutdoor.js

import React from 'react';
import img10 from '../assest/banner/img10.jpg'; // Using img10.jpg as product image

const SportsOutdoor = () => {
  // Dummy product data for Sports & Outdoor category
  const products = [
    { id: 1, title: "Football", description: "High-quality football for matches.", price: "₹500" },
    { id: 2, title: "Badminton Racket", description: "Lightweight badminton racket.", price: "₹800" },
    { id: 3, title: "Running Shoes", description: "Comfortable running shoes.", price: "₹1,200" },
    { id: 4, title: "Yoga Mat", description: "Non-slip yoga mat for exercise.", price: "₹400" },
    { id: 5, title: "Cricket Bat", description: "Durable cricket bat for all players.", price: "₹1,500" },
    { id: 6, title: "Tennis Ball Set", description: "Pack of 3 tennis balls.", price: "₹300" }
  ];

  // Handle product click event
  const handleProductClick = (id) => {
    alert(`Product ${id} clicked!`);
  };

  return (
    <div className="container mx-auto mt-8 mb-16 max-w-screen-xl">
      <h1 className="text-4xl font-bold text-center text-gray-600 mb-8">Sports & Outdoor</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md px-6 py-4 hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <img src={img10} alt={product.title} className="mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
            <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold text-gray-800">{product.price}</p>
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md text-lg font-semibold transition duration-300">
                Buy Now
              </button>
              <button className="ml-4 bg-red-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md text-lg font-semibold transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsOutdoor;
