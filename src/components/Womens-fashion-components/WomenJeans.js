

import React from 'react';
import { Link } from 'react-router-dom';
import tshirtImg1 from '../../assest/womens-fashion/jeans/jeans1.jpg'; // Replace with actual image paths
import tshirtImg2 from '../../assest/womens-fashion/jeans/jeans2.jpg';
import tshirtImg3 from '../../assest/womens-fashion/jeans/jeans3.jpg';
import tshirtImg4 from '../../assest/womens-fashion/jeans/jeans4.jpg';
import tshirtImg5 from '../../assest/womens-fashion/jeans/jeans5.jpg';
import tshirtImg6 from '../../assest/womens-fashion/jeans/jeans6.jpg';

const WomenJeans = () => {
  const products = [
    {
      title: 'Minimal Washed Jeans',
      image: tshirtImg1,
      description: 'Comfortable and stylish casual shirt for everyday wear.',
      price: '₹799',
    },
    {
      title: 'Dark Blue Jeans',
      image: tshirtImg2,
      description: 'Soft and breathable casual Jeans for special occasions.',
      price: '₹1099',
    },
    {
      title: 'Blue Faded Jeans',
      image: tshirtImg3,
      description: 'Perfect for casual meetings, outdoor activities, and office work.',
      price: '₹799',
    },
    {
      title: 'Navy Blue Jeans',
      image: tshirtImg4,
      description: 'Durable and comfortable, ideal for daily use.',
      price: '₹999',
    },
    {
      title: 'Oversized Blue Jeans',
      image: tshirtImg5,
      description: 'Elegant for office and events.',
      price: '₹899',
    },
    {
      title: 'Black Oversized Jeans',
      image: tshirtImg6,
      description: 'Elegant Black Jeans for office and events.',
      price: '₹799',
    },
  ];

  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white border-t-4 border-b-4 border-gray-400 px-6 py-4 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-bold text-gray-600">Women's Jeans Collection</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="flex-grow">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="flex flex-col items-start">
                  <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <p className="text-gray-800 font-bold mt-2">{product.price}</p>
                </div>
                <div className="mt-4 flex justify-between">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-lg font-semibold transition duration-300">
                    Add to Cart
                  </button>
                  <Link to={`/buy-now/${index}`}>
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-lg font-semibold transition duration-300">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenJeans;
