// src/components/Home.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header'; // Import Header component
import img1 from '../assest/banner/img1.jpg';
import img6 from '../assest/banner/img6.jpg';
import img7 from '../assest/banner/img7.jpg';
import img8 from '../assest/banner/img8.jpg';

const Home = () => {
  const images = [img1, img6, img7, img8];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div>
      <Header /> {/* Include the Header component */}
      <div className="container mx-auto mt-8 mb-16">
        {/* Top Categories */}
        <div className="mt-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="bg-white border-t-4 border-b-4 border-gray-400 px-6 py-4 rounded-lg shadow-md text-center">
              <h2 className="text-4xl font-bold text-gray-600">
                Top Categories to Choose From
              </h2>
            </div>
            <div className="flex mt-8 space-x-4 overflow-x-auto">
              <Link to="/mens-fashion">
                <CategoryCard title="Men's Fashion" />
              </Link>
              <Link to="/womens-fashion">
                <CategoryCard title="Women's Fashion" />
              </Link>
              <Link to="/kids-fashion">
                <CategoryCard title="Kids" />
              </Link>
              <Link to="/electronics">
                <CategoryCard title="Electronics" />
              </Link>
              <Link to="/sports-outdoor">
                <CategoryCard title="Sports & Outdoors" />
              </Link>
              <Link to="/home-needs">
                <CategoryCard title="Home Needs" />
              </Link>
              <Link to="/stationary">
                <CategoryCard title="Stationary" />
              </Link>
            </div>
          </div>
        </div>

        {/* Slideshow */}
        <div className="mt-8 relative">
          <div className="flex justify-center overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 2s ease',
                width: `${images.length * 100}%`,
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="h-500px object-cover"
                  style={{ minWidth: '100%', objectFit: 'contain' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mt-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="bg-white border-t-4 border-b-4 border-gray-400 px-6 py-4 rounded-lg shadow-md text-center">
              <h2 className="text-4xl font-bold text-gray-600">
                Featured Products
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <ProductCard
                title="Smart TV"
                image={img1}
                description="Experience crystal-clear images with our Smart TV. Perfect for binge-watching your favorite shows."
              />
              <ProductCard
                title="Men's Jacket"
                image={img6}
                description="Stay warm and stylish with our Men's Jacket. Available in multiple colors and sizes."
              />
              <ProductCard
                title="Beauty Kit"
                image={img7}
                description="Enhance your beauty regimen with our Beauty Kit. Includes skincare essentials for every skin type."
              />
              <ProductCard
                title="Wireless Earbuds"
                image={img8}
                description="Enjoy seamless music playback with our Wireless Earbuds. Ergonomic design for comfort and clarity."
              />
              <ProductCard
                title="Smartphone"
                image={img1}
                description="Stay connected with our latest Smartphone. Powerful features in a sleek, modern design."
              />
              <ProductCard
                title="Women's Shoes"
                image={img6}
                description="Step out in style with our Women's Shoes. Comfortable and fashionable, perfect for any occasion."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Card Components
const CategoryCard = ({ title }) => (
  <div className="bg-white border rounded-lg shadow-md px-6 py-4 flex items-center justify-center hover:bg-gray-100 transition duration-300">
    <span className="text-lg font-semibold text-gray-700">{title}</span>
  </div>
);

const ProductCard = ({ title, image, description }) => (
  <div className="bg-white border rounded-lg shadow-md px-6 py-4 flex flex-col items-center justify-center hover:shadow-xl transition duration-300">
    <img
      src={image}
      alt={title}
      className="mb-4"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
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

export default Home;
