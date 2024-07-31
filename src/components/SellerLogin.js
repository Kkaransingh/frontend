import React, { useState, useRef, useEffect } from 'react'; // Added useRef and useEffect
import { useNavigate, Link } from 'react-router-dom';
import Logo from './Logo'; // Adjust path as necessary

const countries = [
  { name: 'India', code: '+91' },
  { name: 'USA', code: '+1' },
  { name: 'Canada', code: '+1' },
  { name: 'Australia', code: '+61' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'Japan', code: '+81' },
  { name: 'China', code: '+86' },
  { name: 'Brazil', code: '+55' },
];

const SellerLogin = ({ onLogin }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false); // Track whether OTP has been sent
  const [otpMessage, setOtpMessage] = useState(''); // Message to show OTP sent status
  const [countryCode, setCountryCode] = useState('+91'); // Initial country code
  const navigate = useNavigate();
  const formRef = useRef(null);

  // Standard OTP for demonstration (123456)
  const standardOTP = '123456';

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

  const handleSendOTP = () => {
    // Simulate sending OTP logic here
    setOtpSent(true); // Update state to indicate OTP has been sent
    setOtpMessage('OTP sent successfully.'); // Set message to display
  };

  const handleOtpVerification = () => {
    // Mock OTP verification logic for now
    if (otp === standardOTP) {
      alert('OTP verified successfully!');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform seller login logic here
    // For demonstration purposes, simulate successful login
    if (otp === standardOTP) {
      onLogin(); // Call onLogin function passed as prop
      navigate('/become-seller'); // Redirect to become a seller page after login
    } else {
      alert('Invalid OTP. Please enter the correct OTP.');
    }
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    // Ensure only numbers and maximum 10 digits are allowed
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-md w-full max-w-sm z-10 p-8">
        <div className="mb-8">
          <Logo w={100} h={100} />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center">Seller Login</h1>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <select
                className="mr-2 border-none bg-transparent outline-none w-20"
                value={countries.find((country) => country.code === countryCode)?.code}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
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
              <button
                type="button"
                className="text-blue-500 ml-2 hover:underline"
                onClick={handleSendOTP}
                disabled={otpSent} // Disable button after OTP sent
              >
                Send OTP
              </button>
            </div>
            {otpSent && <p className="text-sm text-gray-500 mt-1">{otpMessage}</p>}
          </div>
          {otpSent && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="otp">
                OTP
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength={6} // Limit input to 6 characters (for OTP)
                  required
                />
                {otp.length === 6 && (
                  <button
                    type="button"
                    className="text-blue-500 ml-2 hover:underline"
                    onClick={handleOtpVerification}
                  >
                    Verify OTP
                  </button>
                )}
              </div>
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
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={() => navigate('/become-seller')} // Link to become a seller page
            >
              Become a Seller
            </button>
          </div>
          <div className="text-center">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          <Link to="/home" className="text-blue-500 hover:underline">Continue as Guest</Link>
        </p>
      </div>
    </div>
  );
};

export default SellerLogin;
