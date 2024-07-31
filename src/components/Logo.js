import React from 'react';
import logo from '../assest/logo.png'; // Import the logo image

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Logo;
