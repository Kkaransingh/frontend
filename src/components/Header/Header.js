import React, { useState, useRef } from 'react';
import img2 from '../../assest/banner/img2.jpg';
import img3 from '../../assest/banner/img3.jpg';
import img4 from '../../assest/banner/img4.jpg';

const Header = () => {
  const images = [img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <header className="h-80 shadow-md bg-white text-gray-800 relative overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full h-10 w-10 flex items-center justify-center cursor-pointer z-10"
        onClick={prevSlide}
      >
        {"<"}
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full h-10 w-10 flex items-center justify-center cursor-pointer z-10"
        onClick={nextSlide}
      >
        {">"}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 w-2.5 rounded-full mx-1 focus:outline-none ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
