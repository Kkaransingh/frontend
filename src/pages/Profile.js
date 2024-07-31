// src/pages/Profile.js

import React, { useState } from 'react';

const Profile = ({ onLogout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'CSCSHIVAM CART',
    contactNumber: '123-456-7890',
    address: '123 Main St, City, Country',
    profilePicture: null,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform save logic here (e.g., API call to save changes)
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, profilePicture: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container mx-auto mt-8 mb-16 px-4 max-w-3xl">
      <div className="bg-white border-t-4 border-b-4 border-gray-400 px-6 py-6 rounded-lg shadow-md text-center">
        <h2 className="text-5xl font-bold text-gray-600">My Profile</h2>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="relative">
          <img
            src={profile.profilePicture || '/default-avatar.png'}
            alt="Profile"
            className="w-48 h-48 object-cover rounded-full border-4 border-gray-300"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          )}
        </div>
        <div className="mt-8 w-full text-center">
          <div className="mb-6">
            <label className="block text-xl font-medium text-gray-600">
              Name
            </label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="mt-2 text-2xl">{profile.name}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-xl font-medium text-gray-600">
              Contact Number
            </label>
            {isEditing ? (
              <input
                type="text"
                name="contactNumber"
                value={profile.contactNumber}
                onChange={handleInputChange}
                className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="mt-2 text-2xl">{profile.contactNumber}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-xl font-medium text-gray-600">
              Saved Address
            </label>
            {isEditing ? (
              <textarea
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="mt-2 text-2xl">{profile.address}</p>
            )}
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            {isEditing ? (
              <button
                onClick={handleSaveClick}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={handleEditClick}
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-700"
              >
                Edit Profile
              </button>
            )}
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
