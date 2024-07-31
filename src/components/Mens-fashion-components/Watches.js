// src/components/Mens-fashion-components/Watches.js

import React from 'react';
import { Link } from 'react-router-dom';
import watchImg1 from '../../assest/mens-fashion/watches.jpg'; // Replace with actual image paths
import watchImg2 from '../../assest/mens-fashion/watches.jpg';
import watchImg3 from '../../assest/mens-fashion/watches.jpg';
import watchImg4 from '../../assest/mens-fashion/watches.jpg';
import watchImg5 from '../../assest/mens-fashion/watches.jpg';

const Watches = () => {
  const products = [
    {
      title: "Casual Watch 1",
      image: watchImg1,
      description: "Comfortable and stylish casual watch for everyday wear.",
      price: "$59.99"
    },
    {
      title: "Casual Watch 2",
      image: watchImg2,
      description: "Soft and breathable casual watch for relaxed fit.",
      price: "$64.99"
    },
    {
      title: "Sporty Watch 1",
      image: watchImg3,
      description: "Perfect for sports and outdoor activities.",
      price: "$69.99"
    },
    {
      title: "Sporty Watch 2",
      image: watchImg4,
      description: "Durable and comfortable, ideal for workouts.",
      price: "$74.99"
    },
    {
      title: "Formal Watch",
      image: watchImg5,
      description: "Elegant formal watch for office and events.",
      price: "$79.99"
    }
  ];

  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white border-t-4 border-b-4 border-gray-400 px-6 py-4 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-bold text-gray-600">
            Watch Collection
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-gray-800 font-bold mt-2">{product.price}</p>
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

export default Watches;
