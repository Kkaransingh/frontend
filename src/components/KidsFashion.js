// src/components/KidsFashion.js

import React from 'react';
import img8 from '../assest/banner/img8.jpg'; // Import product image

const KidsFashion = () => {
  // Dummy product data
  const products = [
    { id: 1, title: "Kids T-Shirt", description: "Comfortable cotton t-shirt for kids." },
    { id: 2, title: "Kids Sneakers", description: "Stylish sneakers for everyday use." },
    { id: 3, title: "Kids Jacket", description: "Warm jacket for colder weather." },
    { id: 4, title: "Kids Cap", description: "Trendy cap for sunny days." },
    { id: 5, title: "Kids Watch", description: "Cute watch with colorful design." },
    { id: 6, title: "Kids Shorts", description: "Comfortable shorts for summer." }
  ];

  // Handle highlight of the product
  const handleProductClick = (id) => {
    alert(`Product ${id} clicked!`);
  };

  return (
    <div className="container mx-auto mt-8 mb-16 max-w-screen-xl">
      <h1 className="text-4xl font-bold text-center text-gray-600 mb-8">Kids Fashion</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md px-6 py-4 hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <img src={img8} alt={product.title} className="mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
            <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
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

export default KidsFashion;
