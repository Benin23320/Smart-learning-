  // src/components/LoginPage.jsx
  import React, { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';

  const LoginPage = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Handle form input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    // Validate form data
    const validateForm = () => {
      const newErrors = {};

      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }

      if (!formData.password.trim()) {
        newErrors.password = 'Password is required';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();

      if (validateForm()) {
        console.log('Login Data Submitted:', formData);
        alert('Login successful!');
        navigate('/'); // Redirect to home page after login
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        {/* Card Container */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          {/* Header */}
          <h2 className="text-2xl font-bold mb-6 text-accent">Log In to InsightHub</h2>
          <p className="text-gray-600 mb-8">
            Enter your credentials to access personalized learning paths.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-left text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-left text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-accent text-white py-2 px-4 rounded hover:bg-primary transition-colors duration-300"
            >
              Log In
            </button>

            {/* Footer */}
            <p className="mt-6 text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-accent underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  };

  export default LoginPage;