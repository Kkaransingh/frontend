// src/components/HomeNeeds.js

import React from 'react';

import product1 from '../assest/banner/img11.jpg'; // Update with actual image paths
import product2 from '../assest/banner/img11.jpg';
import product3 from '../assest/banner/img11.jpg';
import product4 from '../assest/banner/img11.jpg';

const products = [
  {
    id: 1,
    name: 'Vacuum Cleaner',
    price: '₹3,999',
    image: product1,
    description: 'Keep your home spotless with our powerful vacuum cleaner.',
  },
  {
    id: 2,
    name: 'Air Purifier',
    price: '₹5,499',
    image: product2,
    description: 'Breathe clean air with our advanced air purifier.',
  },
  {
    id: 3,
    name: 'Blender',
    price: '₹1,299',
    image: product3,
    description: 'Make smoothies and more with our high-speed blender.',
  },
  {
    id: 4,
    name: 'LED Bulbs Pack',
    price: '₹499',
    image: product4,
    description: 'Energy-saving LED bulbs for your entire home.',
  },
  {
    id: 6,
    name: 'House Door Mats',
    price: '₹499',
    image: product4,
    description: '4 Door mats combo that looks amazingly good.',
  },
  {
    id: 6,
    name: 'House floor Mats',
    price: '₹1499',
    image: product4,
    description: '4 Door mats combo that looks amazingly good.',
  }
  // Add more products as needed
];

const HomeNeeds = () => {
  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white border-t-4 border-b-4 border-gray-400 px-6 py-4 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-bold text-gray-600">Home Needs</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ title, image, description, price }) => (
  <div className="bg-white border rounded-lg shadow-md px-6 py-4 flex flex-col items-center justify-center hover:shadow-xl transition duration-300">
    <img
      src={image}
      alt={title}
      className="mb-4"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <p className="text-gray-800 font-bold mt-2">{price}</p>
    <div className="mt-4">
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md text-lg font-semibold transition duration-300">
        View Product
      </button>
      <button className="ml-4 bg-red-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md text-lg font-semibold transition duration-300">
        Add to Cart
      </button>
    </div>
  </div>
);

export default HomeNeeds;
