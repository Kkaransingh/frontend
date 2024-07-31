import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Logo from './Logo'; // Adjust the path if Logo is in a different directory

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    setProfileMenuOpen(false);
    navigate('/home');
  };

  const handleClickOutside = (event) => {
    if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
      setProfileMenuOpen(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const lowerCaseQuery = searchQuery.toLowerCase();
    if (lowerCaseQuery === 'electronics' || lowerCaseQuery === 'phone' || lowerCaseQuery === 'earphones' || lowerCaseQuery === 'earphone' || lowerCaseQuery === 'smartwatches') {
      navigate('/electronics');
    } else if (lowerCaseQuery === 'home') {
      navigate('/home');
    } else {
      alert('No results found for your query.');
    }
    setSearchQuery('');
  };

  useEffect(() => {
    if (isProfileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  return (
    <nav className="h-20 bg-white shadow-md flex items-center justify-between px-6">
      <div className="flex items-center">
        <Logo w={100} h={60} />
      </div>
      <div className="flex-1 flex items-center justify-center space-x-2">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-100 text-gray-800 px-16 py-1 rounded-lg text-lg font-medium"
          />
          <button type="submit" className="bg-peach-500 text-gray-800 px-4 py-1 rounded-lg text-lg font-medium border border-pink-900 hover:bg-pink-700 hover:text-white">
            Search
          </button>
        </form>
      </div>
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-6 text-lg text-gray-800">
          <Link to="/" className="hover:text-blue-500 py-3 font-bold">Products</Link>
          <span className="border-l border-gray-800 h-12"></span>
          <Link to="/deals" className="hover:text-blue-500 py-3 font-bold">Deals</Link>
          <span className="border-l border-gray-800 h-12"></span>
        </nav>
        <Link to="/become-seller">
          <button className="bg-peach-500 text-gray-800 px-4 py-1 rounded-lg text-lg font-semibold border border-pink-900 hover:bg-pink-700 hover:text-white">
            Become a Seller
          </button>
        </Link>
        <div className="relative">
          <Link to="/cart" className="flex items-center hover:text-blue-500">
            <FaShoppingCart size={24} />
          </Link>
        </div>
        <div className="relative" ref={profileMenuRef}>
          <button
            className="flex items-center focus:outline-none"
            onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
          >
            <FaUser size={24} />
          </button>
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Profile</Link>
                  <Link to="/cart" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Cart</Link>
                  <Link to="/wishlist" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Wishlist</Link>
                  <Link to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact Us</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 z-10">Login</Link>
                  <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Up</Link>
                  <Link to="/seller-login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 z-10">Seller Login</Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
