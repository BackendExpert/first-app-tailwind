"use client";

import WebSiteLayout from "@/layouts/WebsiteLayout";
import React from "react";

interface Service {
    title: string;
    description: string;
    icon: string;
    color: string;
}

interface Testimonial {
    name: string;
    text: string;
}

interface PricingPlan {
    title: string;
    price: string;
    features: string[];
}

const Services: React.FC = () => {
    const services: Service[] = [
        { title: "Smart Matchmaking", description: "AI-powered compatibility matching to help you find people who truly connect with you.", icon: "💘", color: "from-pink-400 to-rose-500" },
        { title: "Verified Profiles", description: "Every profile is verified to ensure a safe, respectful, and genuine dating environment.", icon: "🛡️", color: "from-emerald-400 to-green-500" },
        { title: "Boost Profile", description: "Stand out and appear on top of search results with our Boost feature.", icon: "🚀", color: "from-purple-400 to-indigo-500" },
        { title: "Private Chat", description: "Chat securely in real time with people you match with — no third parties involved.", icon: "💬", color: "from-cyan-400 to-sky-500" },
        { title: "Location-Based Matches", description: "Discover people near you or explore long-distance connections easily.", icon: "📍", color: "from-orange-400 to-amber-500" },
        { title: "Premium Experience", description: "Unlock unlimited swipes, profile insights, and exclusive features with premium.", icon: "🌟", color: "from-yellow-400 to-yellow-500" },
        { title: "In-App Video Calls", description: "Connect face-to-face with your match before you meet them in real life.", icon: "🎥", color: "from-indigo-400 to-blue-500" },
        { title: "Events & Hangouts", description: "Join community events, speed dates, and meet-ups organized by us.", icon: "🎉", color: "from-fuchsia-500 to-pink-500" },
        { title: "Safe Mode", description: "Extra privacy controls for solo browsing and interaction safety.", icon: "🔒", color: "from-slate-500 to-gray-600" },
    ];

    const testimonials: Testimonial[] = [
        { name: "Nimali & Aravinda", text: "We found each other through this app and now we're engaged! Thank you for helping us connect so genuinely." },
        { name: "Sandeepa", text: "The verified profiles gave me peace of mind, and I finally met someone who truly gets me." },
        { name: "Hiran", text: "Premium features were totally worth it. Found my soulmate within a month!" },
    ];

    const pricingPlans: PricingPlan[] = [
        { title: "Basic", price: "Free", features: ["Smart Matching", "Verified Profiles", "Limited Swipes"] },
        { title: "Premium", price: "$9.99/mo", features: ["Everything in Basic", "Secure Chat", "Unlimited Swipes", "Profile Boost", "See Who Likes You"] },
        { title: "Elite", price: "$19.99/mo", features: ["Everything in Premium", "Video Calls", "Event Access", "Personal Matchmaker"] },
    ];

    const comingSoonTitles = [
        "Boost Profile",
        "Private Chat",
        "Location-Based Matches",
        "Premium Experience",
        "In-App Video Calls",
        "Events & Hangouts",
    ];

    return (
        <WebSiteLayout>
            <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20 px-6 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-[-5%] left-[-10%] w-96 h-96 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[28rem] h-[28rem] bg-gradient-to-tr from-violet-300 to-rose-200 rounded-full blur-3xl opacity-40 animate-pulse" />

                <div className="relative max-w-7xl mx-auto text-center">
                    {/* Header */}
                    <h1 className="text-5xl md:text-6xl font-extrabold text-rose-600 mb-4 tracking-tight">
                        Our Services
                    </h1>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
                        Explore features designed to help you find real, meaningful connections in a safe and engaging space.
                    </p>

                    {/* Services */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
                        {services.map((service, idx) => {
                            const isComingSoon = comingSoonTitles.includes(service.title);
                            return (
                                <div
                                    key={idx}
                                    className="relative group bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                                >
                                    {isComingSoon && (
                                        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-3xl z-10">
                                            <span className="text-rose-500 font-semibold text-lg">
                                                Coming Soon 🚧
                                            </span>
                                        </div>
                                    )}
                                    <div
                                        className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white text-3xl mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                                    >
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Testimonials */}
                    <div className="mb-24">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
                            💞 Success Stories
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className="bg-white/80 p-8 rounded-2xl shadow-lg border border-white/40 backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition"
                                >
                                    <p className="italic text-gray-600 mb-4 text-sm md:text-base">
                                        “{t.text}”
                                    </p>
                                    <h4 className="font-semibold text-rose-600">{t.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pricing Plans */}
                    <div className="mb-24">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
                            💎 Choose Your Plan
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {pricingPlans.map((plan, idx) => (
                                <div
                                    key={idx}
                                    className="relative bg-white/80 p-8 rounded-2xl shadow-lg border border-white/40 backdrop-blur-md hover:shadow-2xl hover:-translate-y-2 transition-all"
                                >
                                    <h3 className="text-2xl font-bold text-rose-600 mb-2">
                                        {plan.title}
                                    </h3>
                                    <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
                                    <ul className="text-gray-600 text-sm space-y-2 mb-8">
                                        {plan.features.map((f, i) => (
                                            <li key={i}>• {f}</li>
                                        ))}
                                    </ul>
                                    <button className="bg-rose-500 hover:bg-rose-600 text-white py-2.5 px-6 rounded-full text-sm font-semibold shadow-md transition">
                                        Choose Plan
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-24">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                            Ready to Find Your Match?
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Start your journey with LoveConnect today.
                        </p>
                        <button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition">
                            Get the App 💖
                        </button>
                    </div>
                </div>
            </div>
        </WebSiteLayout>
    );
};

export default Services;
