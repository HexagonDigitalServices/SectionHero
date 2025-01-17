import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        {/* Brand Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent">Hexagon Digital Services</h2>
          <p className="text-lg font-medium text-gray-100 mt-2">Transforming Imagination into Reality</p>
        </div>

        {/* Navigation and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">About Us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            </li>
            <li>
              <a href="#blogs" className="hover:text-cyan-400 transition">Blogs</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-xl">
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-cyan-400 transition"
              aria-label="Twitter">
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-red-400 transition"
              aria-label="Instagram">
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-blue-400 transition"
              aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {" "} All rights reserved.
            <br />
            <span className="text-cyan-400 cursor-pointer hover:text-purple-400">Hexagon Digital Services</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
