// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import BecomeSeller from './components/BecomeSeller';
import SellerLogin from './components/SellerLogin';
import ForgotPassword from './components/ForgotPassword';
import Cart from './pages/Cart';
import Electronics from './components/Electronics';
import MensFashion from './components/Mensfashion'; // Correct casing
import Tshirts from './components/Mens-fashion-components/Tshirts';
import Lower from './components/Mens-fashion-components/Lowers';
import Hoodies from './components/Mens-fashion-components/Hoodies';
import Caps from './components/Mens-fashion-components/Caps';
import Watches from './components/Mens-fashion-components/Watches';
import Profile from './pages/Profile';
import KidsFashion from './components/KidsFashion';
import SportsOutdoor from './components/SportsOutdoor';
import HomeNeeds from './components/HomeNeeds';
import Stationary from './components/Stationary';
import WomensFashion from './components/WomensFashion'; // Import WomensFashion component
import WomenTops from './components/Womens-fashion-components/WomenTops';
import WomenJeans from './components/Womens-fashion-components/WomenJeans';
import Kurti from './components/Womens-fashion-components/Kurti';
import Saree from './components/Womens-fashion-components/Saree';
import WomenPurses from './components/Womens-fashion-components/WomenPurses';
import WomenAccessories from './components/Womens-fashion-components/WomenAccessories';
import CartProvider from './Contexts/CartContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <main className="flex-grow">
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/become-seller" element={<BecomeSeller />} />
              <Route path="/seller-login" element={<SellerLogin />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/mens-fashion" element={<MensFashion />} />
              <Route path="/mens-fashion/t-shirts" element={<Tshirts />} />
              <Route path="/mens-fashion/lowers" element={<Lower />} /> {/* Correct path */}
              <Route path="/mens-fashion/hoodies" element={<Hoodies />} />
              <Route path="/mens-fashion/caps" element={<Caps />} />
              <Route path="/mens-fashion/watches" element={<Watches />} />
              <Route path="/profile" element={<Profile onLogout={handleLogout} />} />
              <Route path="/kids-fashion" element={<KidsFashion />} />
              <Route path="/sports-outdoor" element={<SportsOutdoor />} />
              <Route path="/home-needs" element={<HomeNeeds />} />
              <Route path="/stationary" element={<Stationary />} />
              <Route path="/womens-fashion" element={<WomensFashion />} />
              <Route path="/womens-fashion/tops" element={<WomenTops />} />
              <Route path="/womens-fashion/jeans" element={<WomenJeans />} />
              <Route path="/womens-fashion/kurti" element={<Kurti />} />
              <Route path="/womens-fashion/saree" element={<Saree />} />
              <Route path="/womens-fashion/purses" element={<WomenPurses />} />
              <Route path="/womens-fashion/accessories" element={<WomenAccessories />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
