import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo'; // Adjust path as necessary

const countries = [
  { name: 'India', code: '+91' },
  { name: 'USA', code: '+1' },
  { name: 'Canada', code: '+1' },
  { name: 'Australia', code: '+61' },
  { name: 'United Kingdom', code: '+44' },
  // Add more countries as needed
];

const industryOptions = [
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Health & Beauty',
  'Sports & Outdoors',
  'Toys & Games',
  'Books & Media',
];

const BecomeSeller = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); // Initial country code
  const [companyName, setCompanyName] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [warehouseLocation, setWarehouseLocation] = useState('');
  const [productIndustry, setProductIndustry] = useState(''); // State for selected industry
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false); // Track whether OTP has been sent
  const [otpMessage, setOtpMessage] = useState(''); // Message to show OTP sent status
  const [otpVerified, setOtpVerified] = useState(false); // Track whether OTP has been verified
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpVerified) {
      alert('Please verify OTP before submitting.');
      return;
    }
    // Logic to handle form submission
    console.log('Seller application submitted:', {
      fullName,
      email,
      mobileNumber,
      countryCode,
      companyName,
      gstNumber,
      companyAddress,
      warehouseLocation,
      productIndustry,
      otp,
    });
    // Redirect to home or another page after submission
    navigate('/home');
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    // Ensure only numbers and maximum 10 digits are allowed
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
    }
  };

  const handleOtpVerification = () => {
    // Mock OTP verification logic for now
    if (otp === standardOTP) {
      setOtpVerified(true);
      alert('OTP verified successfully!');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div ref={formRef} className="relative flex flex-col items-center justify-center bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-md w-full max-w-3xl z-10 p-8">
        <div className="mb-8">
          <Logo w={100} h={100} />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center">Become a Seller</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                  className="mr-2 border-none bg-transparent outline-none"
                  value={countryCode}
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
              </div>
              {!otpSent && (
                <button
                  type="button"
                  className="text-blue-500 hover:underline mt-2"
                  onClick={handleSendOTP}
                >
                  Send OTP
                </button>
              )}
              {otpSent && <p className="text-sm text-gray-500 mt-1">{otpMessage}</p>}
              {otpSent && (
                <>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={6} // Limit input to 6 digits for OTP
                    required
                  />
                  <button
                    type="button"
                    className="text-blue-500 hover:underline mt-2"
                    onClick={handleOtpVerification}
                  >
                    Verify OTP
                  </button>
                </>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="companyName">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="gstNumber">
                GST Number
              </label>
              <input
                type="text"
                id="gstNumber"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="companyAddress">
                Company Address
              </label>
              <textarea
                id="companyAddress"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="warehouseLocation">
                Warehouse Location
              </label>
              <input
                type="text"
                id="warehouseLocation"
                value={warehouseLocation}
                onChange={(e) => setWarehouseLocation(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Product Industry
              </label>
              <select
                value={productIndustry}
                onChange={(e) => setProductIndustry(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Industry</option>
                {industryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeSeller;
