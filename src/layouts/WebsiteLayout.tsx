import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Nav/Nav';
import React from 'react';

export default function WebSiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-pink-200">
            
            <div className="">
                <Navbar />
            </div>

            <main className="">
                {children}
            </main>

            <Footer />
        </div>
    )
}