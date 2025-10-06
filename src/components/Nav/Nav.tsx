"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Safe toggle function
    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

    return (
        <nav className="bg-gradient-to-r from-pink-600 to-rose-500 p-4 shadow-md relative z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-2xl font-bold tracking-wide">
                    <Link href="/" className="hover:text-pink-200 transition">
                        Emorro
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-white font-medium">
                    <Link href="/" className="hover:text-pink-200 transition">Home</Link>
                    <Link href="/about-us" className="hover:text-pink-200 transition">About</Link>
                    <Link href="/services" className="hover:text-pink-200 transition">Services</Link>
                    <Link href="/contact-us" className="hover:text-pink-200 transition">Contact</Link>
                    <Link href="/privacy-policy" className="hover:text-pink-200 transition">Privacy</Link>
                    <Link href="/terms-and-conditions" className="hover:text-pink-200 transition">Terms</Link>
                    <Link href="/login" className="hover:text-pink-200 transition">Login</Link>
                </div>

                {/* Desktop Social Icons */}
                <div className="hidden md:flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-5 h-5 text-white hover:text-pink-200 transition" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-5 h-5 text-white hover:text-pink-200 transition" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-5 h-5 text-white hover:text-pink-200 transition" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none transition">
                        {isMobileMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col space-y-4 bg-gradient-to-r from-pink-600 to-rose-500 p-4">
                    <Link href="/" className="text-white hover:text-pink-200 transition">Home</Link>
                    <Link href="/about-us" className="text-white hover:text-pink-200 transition">About</Link>
                    <Link href="/services" className="text-white hover:text-pink-200 transition">Services</Link>
                    <Link href="/contact-us" className="text-white hover:text-pink-200 transition">Contact</Link>
                    <Link href="/privacy-policy" className="text-white hover:text-pink-200 transition">Privacy Policy</Link>
                    <Link href="/terms-and-conditions" className="text-white hover:text-pink-200 transition">Terms</Link>
                    <Link href="/login" className="text-white hover:text-pink-200 transition">Login</Link>

                    <div className="flex space-x-6 pt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook className="w-5 h-5 text-white hover:text-pink-200" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram className="w-5 h-5 text-white hover:text-pink-200" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-5 h-5 text-white hover:text-pink-200" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
