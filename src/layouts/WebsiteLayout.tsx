import Link from 'next/link';
import React from 'react';

export default function WebSiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav className="bg-blue-600 text-white p-4 flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
                <Link href="/testform">Test Form</Link>
                <Link href="/login">Login</Link>
            </nav>

            <main>{children}</main>
        </div>
    )
}