// src/components/Mens-fashion-components/Tshirts.js

import React from 'react';
import { Link } from 'react-router-dom';
import tshirtImg1 from '../../assest/mens-fashion/t-shirt.jpg'; // Replace with actual image paths
import tshirtImg2 from '../../assest/mens-fashion/t-shirt.jpg';
import tshirtImg3 from '../../assest/mens-fashion/t-shirt.jpg';
import tshirtImg4 from '../../assest/mens-fashion/t-shirt.jpg';
import tshirtImg5 from '../../assest/mens-fashion/t-shirt.jpg';

const Tshirts = () => {
  const products = [
    {
      title: "Casual T-Shirt 1",
      image: tshirtImg1,
      description: "Comfortable and stylish casual t-shirt for everyday wear.",
      price: "$19.99"
    },
    {
      title: "Casual T-Shirt 2",
      image: tshirtImg2,
      description: "Soft and breathable casual t-shirt for relaxed fit.",
      price: "$24.99"
    },
    {
      title: "Sporty T-Shirt 1",
      image: tshirtImg3,
      description: "Perfect for sports and outdoor activities.",
      price: "$29.99"
    },
    {
      title: "Sporty T-Shirt 2",
      image: tshirtImg4,
      description: "Durable and comfortable, ideal for workouts.",
      price: "$34.99"
    },
    {
      title: "Formal T-Shirt",
      image: tshirtImg5,
      description: "Elegant formal t-shirt for office and events.",
      price: "$39.99"
    }
  ];

  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white border-t-4 border-b-4 border-gray-400 px-6 py-4 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-bold text-gray-600">
            T-Shirt Collection
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

export default Tshirts;
