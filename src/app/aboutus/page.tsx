import WebSiteLayout from "@/layouts/WebsiteLayout";
import React from "react";
import Link from "next/link";
import { Heart, ShieldCheck, Sparkles, Smile } from "lucide-react";

export default function Page() {
    return (
        <WebSiteLayout >
            <section className="bg-white py-20 text-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-pink-600 mb-4">About Us</h1>
                        <p className="text-xl text-gray-600">
                            At <span className="font-semibold text-pink-500">Emorro</span>, we believe in building something deeper than likes and swipes.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        <div className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                            <Heart className="w-10 h-10 mx-auto text-pink-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Real Love</h3>
                            <p className="text-gray-600">We focus on true, lasting relationships—not just short-term flings.</p>
                        </div>

                        <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                            <ShieldCheck className="w-10 h-10 mx-auto text-indigo-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                            <p className="text-gray-600">Privacy, consent, and respectful dating are at the heart of everything we do.</p>
                        </div>

                        <div className="bg-yellow-50 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                            <Sparkles className="w-10 h-10 mx-auto text-yellow-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
                            <p className="text-gray-600">Our algorithm matches based on personality, not just profiles.</p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                            <Smile className="w-10 h-10 mx-auto text-green-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Feel-Good Vibes</h3>
                            <p className="text-gray-600">A kind, welcoming space to meet new people and feel seen.</p>
                        </div>
                    </div>

                    {/* Our Story */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Story</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Emorro was born from a passion to bring back meaningful, respectful connections in the modern world.
                            We’re a team of designers, engineers, and dreamers who believe love should be easy, safe, and sincere.
                            Our platform was carefully engineered with you in mind.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-pink-600 mb-4">Ready to Find Something Real?</h2>
                        <p className="text-lg text-gray-600 mb-6">Start your journey with Emorro today.</p>
                        <Link
                            href="/signup"
                            className="bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold px-10 py-4 rounded-full transition"
                        >
                            Join Now
                        </Link>
                    </div>
                </div>
            </section>
        </WebSiteLayout>
    )
}