// src/components/Stationary.js

import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assest/banner/img12.jpg';
import img2 from '../assest/banner/img12.jpg';
import img3 from '../assest/banner/img12.jpg';
import img4 from '../assest/banner/img12.jpg';
import img5 from '../assest/banner/img12.jpg';
import img6 from '../assest/banner/img12.jpg';

const Stationary = () => {
  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Page Title */}
        <div className="bg-white border-t-4 border-b-4 border-gray-400 px-6 py-4 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-bold text-gray-600">Stationary</h2>
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <ProductCard
            title="Notebook"
            image={img1}
            description="A high-quality notebook with premium paper. Perfect for notes and sketches."
            price="₹499"
          />
          <ProductCard
            title="Pen Set"
            image={img2}
            description="A stylish pen set with smooth ink flow and ergonomic design."
            price="₹999"
          />
          <ProductCard
            title="Desk Organizer"
            image={img3}
            description="Keep your desk tidy with this sleek and functional organizer."
            price="₹1499"
          />
          <ProductCard
            title="Sticky Notes"
            image={img4}
            description="Colorful sticky notes for all your reminders and to-do lists."
            price="₹249"
          />
          <ProductCard
            title="Marker Set"
            image={img5}
            description="A set of vibrant markers for all your highlighting and coloring needs."
            price="₹699"
          />
          <ProductCard
            title="Paper Clips"
            image={img6}
            description="Durable paper clips to keep your documents organized and secure."
            price="₹149"
          />
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
    <p className="text-gray-800 font-semibold mt-2">{price}</p> {/* Added price */}
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

export default Stationary;
