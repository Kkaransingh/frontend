import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-start mt-4">
        <div className="flex-1 space-y-2">
          <h2 className="font-bold">About Us</h2>
          <p className="text-gray-300 hover:text-gray-100">
            We offer a wide range of products<br />
            to cater to all your shopping needs,<br />
            ensuring quality and affordability.
          </p>
        </div>

        <div className="flex-1 space-y-2">
          <h2 className="font-bold">Contact Us</h2>
          <p className="text-gray-300 hover:text-gray-100">
            MAIL TO : care@cscshivam.com <br />
            Phone : 8901695937 <br />
            Gurgaon cyber city,<br />
            sector 26, 122002
          </p>
        </div>

        <div className="flex-1 space-y-2">
          <h2 className="font-bold">
            <a href="#" className="text-gray-300 hover:text-gray-100">Privacy Policy</a>
          </h2>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center items-center mt-4">
        <form className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-700 text-gray-300 px-32 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-md ml-1">
            Subscribe
          </button>
        </form>
      </div>

      <hr className="my-4 border-t border-gray-600" />

      <div className="container mx-auto flex justify-center pt-8" style={{ padding: '10px' }}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
