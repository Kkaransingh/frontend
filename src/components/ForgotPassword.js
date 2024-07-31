import React, { useState, useEffect, useRef } from 'react';
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
  // Add more countries as needed
];

const ForgotPassword = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); // Initial country code
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
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

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    // Ensure only numbers and maximum 10 digits are allowed
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
    }
  };

  const handleSendOtp = () => {
    // Simulate sending OTP
    console.log(`Sending OTP to ${countryCode} ${mobileNumber}`);
    setOtpSent(true);
    // In a real application, send the OTP via backend service here
  };

  const handleVerifyOtp = () => {
    // Simulate OTP verification
    if (otp === '123456') { // Dummy check for example
      console.log('OTP verified');
      setOtpVerified(true);
    } else {
      alert('Invalid OTP');
    }
    // In a real application, verify the OTP via backend service here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Logic to reset password
      console.log('Password reset successful');
      navigate('/login'); // Redirect to login page
    } else {
      alert('Passwords do not match');
    }
    // In a real application, reset the password via backend service here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div ref={formRef} className="relative flex flex-col items-center justify-center bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-md w-full max-w-sm z-10 p-8">
        <div className="mb-8">
          <Logo w={100} h={100} />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
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
          </div>
          {!otpSent ? (
            <button
              type="button"
              onClick={handleSendOtp}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Send OTP
            </button>
          ) : !otpVerified ? (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="otp">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
              >
                Verify OTP
              </button>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="newPassword">
                  Create New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                  Confirm New Password
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
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Reset Password
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
