'use client';
import React from 'react';
import { ShieldCheck, Lock, Eye, Globe, RefreshCw } from 'lucide-react';
import WebSiteLayout from '@/layouts/WebsiteLayout';

const PrivacyPolicy = () => {
    return (
        <WebSiteLayout>
            <section className="relative min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50 py-20 px-6">
                {/* Floating Gradient Circle */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-indigo-300 to-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

                <div className="relative max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 md:p-16">
                    <div className="text-center mb-14">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                            <ShieldCheck className="w-9 h-9 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            We value your trust and are committed to protecting your personal information.
                        </p>
                    </div>

                    <div className="space-y-14 text-gray-700">
                        <div>
                            <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-600">
                                <Eye className="w-6 h-6" /> Information We Collect
                            </h2>
                            <p className="mt-3">
                                We may collect details like your name, contact information, and technical data such as IP addresses or device types.
                                We also use cookies to improve your browsing experience.
                            </p>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-2 text-2xl font-semibold text-indigo-600">
                                <Globe className="w-6 h-6" /> How We Use Your Information
                            </h2>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>To personalize and enhance your experience.</li>
                                <li>To communicate updates, offers, or alerts.</li>
                                <li>To maintain security and service reliability.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-2 text-2xl font-semibold text-teal-600">
                                <Lock className="w-6 h-6" /> Data Protection & Security
                            </h2>
                            <p className="mt-3">
                                Your data is safeguarded with encryption, secure storage, and restricted access protocols to prevent unauthorized use.
                            </p>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-2 text-2xl font-semibold text-pink-600">
                                <RefreshCw className="w-6 h-6" /> Policy Updates
                            </h2>
                            <p className="mt-3">
                                This policy may be updated periodically. Please check this page regularly to stay informed.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center border-t border-gray-200 pt-6">
                        <p className="text-gray-600">
                            Questions? Contact us at{' '}
                            <a href="mailto:support@example.com" className="text-purple-600 font-medium underline hover:text-pink-600">
                                support@example.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </WebSiteLayout>
    );
};

export default PrivacyPolicy;
