import React from 'react';
import img1 from '../assest/banner/img6.jpg';
import img2 from '../assest/banner/img6.jpg';
import img3 from '../assest/banner/img6.jpg';
import img4 from '../assest/banner/img6.jpg';
import img5 from '../assest/banner/img6.jpg';
import img6 from '../assest/banner/img6.jpg';
import img7 from '../assest/banner/img6.jpg';
import img8 from '../assest/banner/img6.jpg';
import img9 from '../assest/banner/img6.jpg';
import img10 from '../assest/banner/img6.jpg';
import img11 from '../assest/banner/img6.jpg';
import img12 from '../assest/banner/img6.jpg';
import img13 from '../assest/banner/img6.jpg';
import img14 from '../assest/banner/img6.jpg';
import img15 from '../assest/banner/img6.jpg';

const Electronics = () => {
  return (
    <div className="container mx-auto mt-8 mb-16">
      {/* Featured Products */}
      <div className="mt-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-white border-t-4 border-b-4 border-gray-400 px-6 py-4 rounded-lg shadow-md text-center">
            <h2 className="text-4xl font-bold text-gray-600">Electronics</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ProductCard
              title="Smart TV"
              image={img1}
              description="Experience crystal-clear images with our Smart TV. Perfect for binge-watching your favorite shows."
              price="$499.99"
            />
            <ProductCard
              title="Wireless Earbuds"
              image={img8}
              description="Enjoy seamless music playback with our Wireless Earbuds. Ergonomic design for comfort and clarity."
              price="$59.99"
            />
            <ProductCard
              title="Smartphone"
              image={img1}
              description="Stay connected with our latest Smartphone. Powerful features in a sleek, modern design."
              price="$699.99"
            />
            <ProductCard
              title="Laptop"
              image={img2}
              description="Boost your productivity with our high-performance Laptop. Ideal for work and play."
              price="$999.99"
            />
            <ProductCard
              title="Bluetooth Speaker"
              image={img3}
              description="Take your music anywhere with our portable Bluetooth Speaker. Rich sound in a compact package."
              price="$39.99"
            />
            <ProductCard
              title="Smartwatch"
              image={img4}
              description="Track your fitness and stay connected with our Smartwatch. Stylish and functional."
              price="$149.99"
            />
            <ProductCard
              title="Gaming Console"
              image={img5}
              description="Experience immersive gaming with our latest Gaming Console. Superior graphics and performance."
              price="$299.99"
            />
            <ProductCard
              title="Digital Camera"
              image={img6}
              description="Capture stunning photos with our Digital Camera. Perfect for both beginners and professionals."
              price="$549.99"
            />
            <ProductCard
              title="Tablet"
              image={img7}
              description="Versatile Tablet for work, play, and everything in between. Lightweight and powerful."
              price="$399.99"
            />
            <ProductCard
              title="VR Headset"
              image={img9}
              description="Step into a new reality with our VR Headset. Immersive experiences await."
              price="$199.99"
            />
            <ProductCard
              title="Smart Home Assistant"
              image={img10}
              description="Control your home with your voice using our Smart Home Assistant. Convenient and intelligent."
              price="$89.99"
            />
            <ProductCard
              title="Fitness Tracker"
              image={img11}
              description="Monitor your health and fitness with our sleek Fitness Tracker. Comprehensive tracking features."
              price="$49.99"
            />
            <ProductCard
              title="E-Reader"
              image={img12}
              description="Carry your entire library with you using our E-Reader. Lightweight and easy on the eyes."
              price="$129.99"
            />
            <ProductCard
              title="Portable Charger"
              image={img13}
              description="Keep your devices charged on the go with our Portable Charger. Compact and powerful."
              price="$24.99"
            />
            <ProductCard
              title="Noise-Cancelling Headphones"
              image={img14}
              description="Enjoy your music without distractions with our Noise-Cancelling Headphones. Superior sound quality."
              price="$199.99"
            />
            <ProductCard
              title="Smart Thermostat"
              image={img15}
              description="Control your home's temperature remotely with our Smart Thermostat. Energy efficient and easy to use."
              price="$149.99"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ title, image, description, price }) => (
  <div className="bg-white border rounded-lg shadow-md px-6 py-4 flex flex-col items-center justify-center hover:shadow-xl transition duration-300">
    <img src={image} alt={title} className="mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
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

export default Electronics;
