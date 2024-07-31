// src/components/MensFashion.js

import React from 'react';
import { Link } from 'react-router-dom';
import tshirtImg from '../assest/mens-fashion/t-shirt.jpg';
import lowersImg from '../assest/mens-fashion/lower.jpg';
import hoodiesImg from '../assest/mens-fashion/hoodies.jpg';
import capsImg from '../assest/mens-fashion/caps.jpg';
import watchesImg from '../assest/mens-fashion/watches.jpg';

const MensFashion = () => {
  const categories = [
    { title: 'T-Shirts', image: tshirtImg, link: '/mens-fashion/t-shirts' },
    { title: 'Lowers', image: lowersImg, link: '/mens-fashion/lowers' }, // Ensure this link matches your route
    { title: 'Hoodies', image: hoodiesImg, link: '/mens-fashion/hoodies' },
    { title: 'Caps', image: capsImg, link: '/mens-fashion/caps' },
    { title: 'Watches', image: watchesImg, link: '/mens-fashion/watches' },
  ];

  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white border-t-4 border-b-4 border-gray-400 px-6 py-4 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-bold text-gray-600">
            Men's Fashion Categories
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {categories.map((category, index) => (
            <Link to={category.link} key={index} className="block">
              <div className="relative bg-white border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  style={{ height: '300px' }} // Adjust height as needed
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-lg font-semibold">
                  {category.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MensFashion;
