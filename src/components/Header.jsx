// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <div className="bg-white p-4 shadow-md mb-4">
      <div className="flex items-center justify-between">
        {/* Branding */}
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
            <path d="M19 12H5"></path>
            <path d="M12 5l-7 7 7 7"></path>
          </svg>
          <span className="text-xl font-bold">Elearn.com</span>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
          </svg>
          <img src="/images/user.png" alt="User Profile" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;