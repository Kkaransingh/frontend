// src/components/Mens-fashion-components/Tshirts.js

import React from 'react';
import { Link } from 'react-router-dom';
import tshirtImg1 from '../../assest/womens-fashion/Tops/top1.jpg'; // Replace with actual image paths
import tshirtImg2 from '../../assest/womens-fashion/Tops/top2.jpg';
import tshirtImg3 from '../../assest/womens-fashion/Tops/top3.jpg';
import tshirtImg4 from '../../assest/womens-fashion/Tops/top4.jpg';
import tshirtImg5 from '../../assest/womens-fashion/Tops/top5.jpg';
import tshirtImg6 from '../../assest/womens-fashion/Tops/top6.jpg';

const WomenTops = () => {
  const products = [
    {
      title: "Minimal Print Shirt",
      image: tshirtImg1,
      description: "Comfortable and stylish casual shirt for everyday wear.",
      price: "₹799"
    },
    {
      title: "Green Top",
      image: tshirtImg2,
      description: "Soft and breathable casual top for special occassion .",
      price: "₹1099"
    },
    {
      title: "Blue Floral Top",
      image: tshirtImg3,
      description: "Perfect for casual meeting and outdoor activities and office works.",
      price: "₹799"
    },
    {
      title: "Peach Kurti Top",
      image: tshirtImg4,
      description: "Durable and comfortable, ideal for Daily Use.",
      price: "₹999"
    },
    {
      title: "Brown Full sleeve Top",
      image: tshirtImg5,
      description: "Elegant Full sleeve top for office and events.",
      price: "₹899"
    },
    {
        title: "Floral Shirt",
        image: tshirtImg6,
        description: "Elegant floral shirt for office and events.",
        price: "₹799"
      }
  ];

  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white border-t-4 border-b-4 border-gray-400 px-6 py-4 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-bold text-gray-600">
            Top's Collection
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

export default WomenTops;
