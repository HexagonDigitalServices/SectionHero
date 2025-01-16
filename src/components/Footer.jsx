import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t text-white py-8">

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Hexagon Digital Services</h2>
            <p className="mt-2">Transforming Imagination into Reality</p>
          </div>

          {/* Navigation Links */}
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-cyan-300">About Us</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Services</a></li>
              <li><a href="#blogs" className="hover:text-cyan-300">Blogs</a></li>
              <li><a href="#contact" className="hover:text-cyan-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="https://facebook.com" className="text-white hover:text-cyan-300">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-cyan-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-cyan-300">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-cyan-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Hexagon Digital Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
