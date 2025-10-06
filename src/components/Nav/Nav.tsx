"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { HiMenu, HiX } from "react-icons/hi";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/aboutus"},
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact-us" },
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms-and-conditions" },
    // { label: "Login", href: "/login" },
    { label: "Login", href: "/auth/login" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState("/");

    useEffect(() => {
        if (typeof window !== "undefined") setCurrentPath(window.location.pathname);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen((p) => !p);

    const onNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        setCurrentPath(href);
    };

    const isActive = (href: string) => {
        if (href === "/") return currentPath === "/";
        return currentPath.startsWith(href);
    };

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className="bg-gradient-to-r from-pink-600 to-rose-500 p-4 shadow-md relative z-50"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-2xl font-bold tracking-wide">
                    <Link href="/" className="hover:text-pink-200 transition" onClick={() => onNavClick("/")}>
                        Emorro
                    </Link>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-8 text-white font-medium items-center">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => onNavClick(item.href)}
                            className={`hover:text-pink-200 transition ${isActive(item.href) ? "underline underline-offset-4" : ""}`}
                            aria-current={isActive(item.href) ? "page" : undefined}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop social icons */}
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

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        aria-controls="mobile-menu"
                        aria-expanded={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none transition"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            <div
                id="mobile-menu"
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col space-y-4 bg-gradient-to-r from-pink-600 to-rose-500 p-4">
                    {NAV_ITEMS.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => onNavClick(item.href)} className="text-white hover:text-pink-200 transition">
                            {item.label}
                        </Link>
                    ))}

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
