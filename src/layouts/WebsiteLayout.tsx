import Link from 'next/link';
import React from 'react';

export default function WebSiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-pink-200">
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-rose-600/80 via-pink-500/80 to-fuchsia-500/80 backdrop-blur-lg shadow-xl border-b border-white/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo / Brand */}
                    <div className="flex items-center space-x-2">
                        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-lg">
                            <span className="text-rose-600 text-xl font-bold">♥</span>
                        </div>
                        <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-sm">
                            Love<span className="text-yellow-300">Connect</span>
                        </h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/90">
                        <Link
                            href="/"
                            className="relative group transition-all duration-300"
                        >
                            Home
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <Link href="/about-us" className="relative group">
                            About Us
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <Link href="/services" className="relative group">
                            Services
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <Link href="/contact-us" className="relative group">
                            Contact Us
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <Link href="/privacy-policy" className="relative group">
                            Privacy
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <Link href="/terms-and-conditions" className="relative group">
                            Terms
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <Link href="/testform" className="relative group">
                            Test Form
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        {/* Login Button */}
                        <Link
                            href="/login"
                            className="px-5 py-2 bg-white text-rose-600 rounded-full shadow-md hover:bg-yellow-300 hover:text-rose-700 transition-all duration-300 font-bold"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white focus:outline-none text-2xl">
                        ☰
                    </button>
                </div>
            </nav>

            {/* MAIN CONTENT */}
            <main className="pt-24 px-6">
                {children}
            </main>
        </div>


    )
}