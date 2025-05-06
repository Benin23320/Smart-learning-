// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, onSignUpClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-accent">Welcome to InsightHub</h2>
        <p className="text-gray-600 mb-6">Please log in or sign up to continue.</p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={onClose} // Close modal after clicking
            className="bg-accent text-primary px-4 py-2 rounded hover:bg-accent/80 transition-colors duration-300"
          >
            Log In
          </button>
          <button
            onClick={onSignUpClick} // Open the registration popup
            className="bg-accent text-primary px-4 py-2 rounded hover:bg-accent/80 transition-colors duration-300"
          >
            Sign Up
          </button>
        </div>
        <button
          onClick={onClose} // Close modal
          className="mt-6 text-sm text-gray-600 hover:text-gray-800 underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;