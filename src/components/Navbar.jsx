import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="py-4 bg-black sm:py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="shrink-0">
                        <a href="#" title="" className="flex">
                            <img className="w-auto h-9" src={logo} alt="Logo" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button type="button" className="text-white" onClick={() => setExpanded(!expanded)}
                            aria-expanded={expanded}>
                            {!expanded ? (
                                <FiMenu className="w-7 h-7" />
                            ) : (
                                <FiX className="w-7 h-7" />
                            )}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
                        <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Products</a>
                        <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Features</a>
                        <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Pricing</a>
                        <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Support</a>
                    </nav>

                    {/* Start Free Trial Button */}
                    <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
                        <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                        <a
                            href="#"
                            className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                            role="button"
                        >
                            Start free trial
                        </a>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {expanded && (
                    <nav>
                        <div className="flex flex-col pt-8 pb-4 space-y-6">
                            <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Products</a>
                            <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Features</a>
                            <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Pricing</a>
                            <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Support</a>
                            <div className="relative inline-flex items-center justify-center group">
                                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                                >
                                    Start free trial
                                </a>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </div>
    );
};

export default Navbar;
