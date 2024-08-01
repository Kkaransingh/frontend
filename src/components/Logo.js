import React from 'react';
import logo from '../assest/logo.png'; // Import the logo image

const Logo = () => {
  return (
    <div className="logo-container flex justify-center items-center">
      <img src={logo} alt="Logo" className="logo w-48 h-auto" />
    </div>
  );
};

export default Logo;
