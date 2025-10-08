"use client";

import WebSiteLayout from "@/layouts/WebsiteLayout";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        // TODO: Add backend submission logic here
    };

    return (
        <WebSiteLayout>
            <div className="min-h-screen flex items-center justify-center bg-pink-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl w-full bg-white p-10 rounded-xl shadow-lg">
                    <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-6">
                        Contact Us
                    </h1>
                    <p className="text-center text-gray-600 mb-8 text-lg leading-relaxed">
                        We’re here to assist you. Reach out for inquiries, support, or
                        suggestions – we’ll get back to you as soon as possible.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex flex-col">
                            <label
                                htmlFor="name"
                                className="text-lg font-semibold text-gray-800 mb-2"
                            >
                                Your Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                                className="p-4 border-2 border-gray-300 rounded-lg shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 
                            transition duration-300"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="text-lg font-semibold text-gray-800 mb-2"
                            >
                                Your Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                                className="p-4 border-2 border-gray-300 rounded-lg shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 
                            transition duration-300"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="message"
                                className="text-lg font-semibold text-gray-800 mb-2"
                            >
                                Your Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Enter your message"
                                rows={6}
                                className="p-4 border-2 border-gray-300 rounded-lg shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 
                            transition duration-300"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white py-4 rounded-lg 
                        hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 
                        transition duration-300 transform hover:scale-105"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="mt-10 text-center">
                        <p className="text-xl font-semibold text-gray-700 mb-4">
                            Or reach us at:
                        </p>
                        <ul className="text-lg text-gray-600 space-y-3">
                            <li>
                                Email:{" "}
                                <span className="text-pink-500">
                                    support@example.com
                                </span>
                            </li>
                            <li>
                                Phone:{" "}
                                <span className="text-pink-500">+123 456 7890</span>
                            </li>
                            <li>
                                Address:{" "}
                                <span className="text-pink-500">
                                    123 Main St, City, Country
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </WebSiteLayout>
    );
};

export default ContactUs;
