"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-pink-600 to-red-500 text-white py-16 px-4 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* About */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">About Emorro</h3>
                    <p className="text-sm leading-relaxed">
                        Emorro is your modern dating companion — connecting hearts with
                        care, privacy, and genuine emotion. Love shouldn’t be complicated —
                        we make it simple and beautiful.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link href="/privacy-policy" className="hover:underline">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-and-conditions" className="hover:underline">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" className="hover:underline">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="hover:underline">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Contact</h3>
                    <p className="flex items-center gap-2 text-sm">
                        <HiOutlineMail className="w-5 h-5" /> support@emorro.com
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                        <HiOutlinePhone className="w-5 h-5" /> +1 (800) 555-1234
                    </p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook className="w-6 h-6 hover:text-pink-200 transition" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram className="w-6 h-6 hover:text-pink-200 transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-6 h-6 hover:text-pink-200 transition" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 border-t border-white/30 pt-6 text-center text-sm">
                <p>© {year} Emorro. All rights reserved.</p>
                <p className="text-pink-100 mt-1">
                    Built by{" "}
                    <a
                        href=""
                        target="_blank"
                        className="hover:underline"
                    >
                        JehanKandy
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
