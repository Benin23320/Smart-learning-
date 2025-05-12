import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-accent text-white">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Smart Learning</h3>
            <p className="text-sm">
              Smart Learning is your go-to platform for personalized learning paths, expert-led courses, and skill development for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/courses" className="hover:underline">Courses</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li><a href="/category/programming" className="hover:underline">Programming</a></li>
              <li><a href="/category/design" className="hover:underline">Design</a></li>
              <li><a href="/category/marketing" className="hover:underline">Marketing</a></li>
              <li><a href="/category/business" className="hover:underline">Business</a></li>
              <li><a href="/category/ai" className="hover:underline">Artificial Intelligence</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2023 Smart Learning-Based AI. All rights reserved.</p>
          <p className="text-sm mt-2">
            <a href="/terms" className="hover:underline">Terms of Service</a> | <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;