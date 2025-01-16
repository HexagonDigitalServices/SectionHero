import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiPizzaSlice } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white py-4 px-6">
            <div className="flex items-center justify-between">
                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>

                {/* Left Section: Options */}
                <div
                    className={`flex space-x-6 text-sm font-medium ${isOpen ? "block" : "hidden"
                        } lg:flex`}
                >
                    <a href="#" className="hover:text-yellow-500">
                        Home
                    </a>
                    <a href="#" className="hover:text-yellow-500">
                        Menu
                    </a>
                    <a href="#" className="hover:text-yellow-500">
                        Contact
                    </a>
                </div>

                {/* Center Section: Logo */}
                <div className="relative flex justify-center items-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                        <GiPizzaSlice size={40} className="text-white" />
                    </div>
                </div>

                {/* Right Section: Icons */}
                <div
                    className={`flex space-x-4 ${isOpen ? "block mt-4" : "hidden"
                        } lg:flex lg:space-x-6 lg:mt-0`}
                >
                    <FaFacebook
                        size={20}
                        className="hover:text-blue-500 transition-colors duration-300"
                    />
                    <FaTwitter
                        size={20}
                        className="hover:text-blue-400 transition-colors duration-300"
                    />
                    <FaInstagram
                        size={20}
                        className="hover:text-pink-500 transition-colors duration-300"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
