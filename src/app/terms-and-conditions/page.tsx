'use client';
import React from 'react';
import { ScrollText, UserCheck, ShieldOff, AlertTriangle, Gavel } from 'lucide-react';
import WebSiteLayout from '@/layouts/WebsiteLayout';

const TermsAndConditions = () => {
    return (
        <WebSiteLayout>
            <section className="relative min-h-screen bg-gradient-to-b from-rose-50 via-white to-blue-50 py-20 px-6">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-300 to-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-300 to-indigo-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

                <div className="relative max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 md:p-16">
                    <div className="text-center mb-14">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-blue-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                            <ScrollText className="w-9 h-9 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
                            Terms & Conditions
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Please review these terms carefully before using our services.
                        </p>
                    </div>

                    <div className="space-y-14 text-gray-700">
                        <div>
                            <h2 className="flex items-center gap-2 text-2xl font-semibold text-blue-600">
                                <UserCheck className="w-6 h-6" /> Acceptance of Terms
                            </h2>
                            <p className="mt-3">
                                By registering or accessing our services, you confirm your agreement to these terms and future updates.
                            </p>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-600">
                                <ShieldOff className="w-6 h-6" /> User Responsibilities
                            </h2>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>You must provide accurate and lawful information.</li>
                                <li>You are responsible for maintaining your account security.</li>
                                <li>Use the platform ethically and respect other users.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-2 text-2xl font-semibold text-rose-600">
                                <AlertTriangle className="w-6 h-6" /> Prohibited Conduct
                            </h2>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>No harassment, hacking, or unlawful activity.</li>
                                <li>No spreading of malware or harmful content.</li>
                                <li>No impersonation or misuse of information.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-2 text-2xl font-semibold text-teal-600">
                                <Gavel className="w-6 h-6" /> Termination & Legal
                            </h2>
                            <p className="mt-3">
                                We reserve the right to suspend or terminate accounts for violations. Use of our platform implies acceptance of these rules.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center border-t border-gray-200 pt-6">
                        <p className="text-gray-600">
                            Have any questions? Email us at{' '}
                            <a href="mailto:support@example.com" className="text-blue-600 font-medium underline hover:text-pink-600">
                                support@example.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </WebSiteLayout>
    );
};

export default TermsAndConditions;
