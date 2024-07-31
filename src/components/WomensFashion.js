// src/components/WomensFashion.js

import React from 'react';
import { Link } from 'react-router-dom';
import topsImg from '../assest/womens-fashion/img15.jpg';
import jeansImg from '../assest/womens-fashion/img16.jpg';
import kurtiImg from '../assest/womens-fashion/img17.jpg';
import sareeImg from '../assest/womens-fashion/img18.jpg';
import pursesImg from '../assest/womens-fashion/img19.jpg';
import accessoriesImg from '../assest/womens-fashion/img20.jpg';

const WomensFashion = () => {
  const categories = [
    { title: 'Women Tops', image: topsImg, link: '/womens-fashion/tops' },
    { title: 'Women Jeans', image: jeansImg, link: '/womens-fashion/jeans' },
    { title: 'Kurti', image: kurtiImg, link: '/womens-fashion/kurti' },
    { title: 'Saree', image: sareeImg, link: '/womens-fashion/saree' },
    { title: 'Women Purses', image: pursesImg, link: '/womens-fashion/purses' },
    { title: 'Women Accessories', image: accessoriesImg, link: '/womens-fashion/accessories' },
  ];

  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white border-t-4 border-b-4 border-gray-400 px-6 py-4 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-bold text-gray-600">
            Women's Fashion Categories
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

export default WomensFashion;
