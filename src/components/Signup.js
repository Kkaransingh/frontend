import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo'; // Adjust path as necessary

const countries = [
  { name: 'India', code: '+91' },
  { name: 'USA', code: '+1' },
  { name: 'Canada', code: '+1' },
  { name: 'Australia', code: '+61' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'Brazil', code: '+55' },
  { name: 'Japan', code: '+81' },
  { name: 'South Africa', code: '+27' },
];

const Signup = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); // Initial country code
  const [isOtpRequested, setIsOtpRequested] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        // Clicked outside the form, close the form or handle as needed
        navigate('/'); // Example: Navigate to homepage
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navigate]);

  const requestOtp = async () => {
    try {
      // Send a request to your backend to generate and send the OTP
      await fetch('/api/request-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber: `${countryCode}${mobileNumber}` }),
      });
      setIsOtpRequested(true);
    } catch (error) {
      console.error('Error requesting OTP:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!isOtpRequested) {
      // Request OTP if not already requested
      await requestOtp();
    } else {
      // Perform signup logic here
      onLogin();
      navigate('/home');
    }
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    // Ensure only numbers and maximum 10 digits are allowed
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value;
    // Ensure only numbers and maximum 4 digits are allowed
    if (/^\d{0,4}$/.test(value)) {
      setOtp(value);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-md w-full max-w-sm z-10 p-8" ref={formRef}>
        <div className="mb-8">
          <Logo w={100} h={100} />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <select
                className="mr-2 border-none bg-transparent outline-none w-24"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country.code}>
                    {`${country.name} (${country.code})`}
                  </option>
                ))}
              </select>
              <input
                type="text"
                id="mobileNumber"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={10} // Limit input to 10 digits
                required
              />
            </div>
          </div>
          {isOtpRequested && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="otp">
                OTP Code
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={handleOtpChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={4} // Limit input to 4 digits
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              {isOtpRequested ? 'Verify OTP' : 'Sign Up'}
            </button>
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
