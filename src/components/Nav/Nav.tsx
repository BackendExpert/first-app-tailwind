"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen((s) => !s);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    // helper to close menu when clicking a nav item on mobile
    const handleNavClick = () => {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-gradient-to-r from-pink-600 to-rose-500 p-4 shadow-md relative z-50" role="navigation" aria-label="Main Navigation">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-2xl font-bold tracking-wide">
                    <Link href="/" onClick={handleNavClick} className="hover:text-pink-200 transition">
                        Emorro
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-white font-medium">
                    <Link href="/" onClick={handleNavClick} className="hover:text-pink-200 transition">Home</Link>
                    <Link href="/about-us" onClick={handleNavClick} className="hover:text-pink-200 transition">About</Link>
                    <Link href="/services" onClick={handleNavClick} className="hover:text-pink-200 transition">Services</Link>
                    <Link href="/contact-us" onClick={handleNavClick} className="hover:text-pink-200 transition">Contact</Link>
                    <Link href="/privacy-policy" onClick={handleNavClick} className="hover:text-pink-200 transition">Privacy</Link>
                    <Link href="/terms-and-conditions" onClick={handleNavClick} className="hover:text-pink-200 transition">Terms</Link>
                    <Link href="/login" onClick={handleNavClick} className="hover:text-pink-200 transition">Login</Link>
                </div>

                {/* Desktop Social Icons */}
                <div className="hidden md:flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Facebook className="w-5 h-5 text-white hover:text-pink-200 transition" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram className="w-5 h-5 text-white hover:text-pink-200 transition" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter className="w-5 h-5 text-white hover:text-pink-200 transition" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none transition"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="flex flex-col space-y-4 bg-gradient-to-r from-pink-600 to-rose-500 p-4">
                    <Link href="/" onClick={handleNavClick} className="text-white hover:text-pink-200 transition">Home</Link>
                    <Link href="/about-us" onClick={handleNavClick} className="text-white hover:text-pink-200 transition">About</Link>
                    <Link href="/services" onClick={handleNavClick} className="text-white hover:text-pink-200 transition">Services</Link>
                    <Link href="/contact-us" onClick={handleNavClick} className="text-white hover:text-pink-200 transition">Contact</Link>
                    <Link href="/privacy-policy" onClick={handleNavClick} className="text-white hover:text-pink-200 transition">Privacy Policy</Link>
                    <Link href="/terms-and-conditions" onClick={handleNavClick} className="text-white hover:text-pink-200 transition">Terms</Link>
                    <Link href="/login" onClick={handleNavClick} className="text-white hover:text-pink-200 transition">Login</Link>

                    <div className="flex space-x-6 pt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook className="w-5 h-5 text-white hover:text-pink-200" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram className="w-5 h-5 text-white hover:text-pink-200" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter className="w-5 h-5 text-white hover:text-pink-200" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
