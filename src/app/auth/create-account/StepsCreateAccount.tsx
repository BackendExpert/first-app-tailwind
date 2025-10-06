'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import Image from 'next/image'
import { BsCaretRightFill } from 'react-icons/bs'
import Link from 'next/link'

interface FormData {
    name: string
    age: string
    lookingFor: string
    routine: string
}

export default function StepsCreateAccount() {
    const [step, setStep] = useState<number>(0)
    const [formData, setFormData] = useState<FormData>({
        name: '',
        age: '',
        lookingFor: '',
        routine: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleNext = () => setStep((prev) => prev + 1)
    const handlePrev = () => setStep((prev) => prev - 1)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Account setup completed successfully!')
    }

    return (
        <div className="md:mt-0 mt-20 md:mb-0 mb-20 relative z-10 bg-white text-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl p-8 backdrop-blur-sm -mt-10 transition-all duration-500">
            <div className="text-right text-sm text-gray-500 flex justify-end items-center space-x-1">
                <span className="hidden md:inline">Already have an Account?</span>
                <Link
                    href="/auth/login"
                    className="text-pink-500 font-semibold hover:underline"
                >
                    Login
                </Link>
            </div>
            <div className="flex justify-center">
                <Image
                    src="/hearts.png"
                    alt="Hi all"
                    width={100}
                    height={100}
                    className="drop-shadow-[0_12px_10px_rgba(0,0,0,0.1)]"
                />
            </div>

            {step === 0 && (
                <div>
                    <h1 className="text-2xl font-semibold mb-6 text-center text-pink-500">
                        Welcome to Emorro
                    </h1>

                    <div className="md:mx-8 space-y-8">
                        {[
                            { title: 'Be Yourself', text: 'Make sure your photos, age, and bio are correct.' },
                            { title: 'Stay Positive', text: 'Keep your conversations kind, open, and genuine.' },
                            { title: 'Be Respectful', text: 'Treat others the way you’d want to be treated.' },
                            { title: 'Have Fun', text: 'Enjoy meeting new people and building connections.' },
                        ].map((item, index) => (
                            <div key={index}>
                                <div className="flex items-center">
                                    <BsCaretRightFill className="h-5 w-auto fill-pink-500" />
                                    <h2 className="text-lg font-semibold text-pink-500 ml-2">{item.title}</h2>
                                </div>
                                <p className="ml-7 text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-10">
                        <button
                            onClick={handleNext}
                            className="bg-pink-500 text-white font-medium px-6 py-3 rounded-full hover:bg-pink-600 transition"
                        >
                            Start your journey today
                        </button>
                    </div>
                </div>
            )}

            {step === 1 && (
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleNext()
                    }}
                >
                    <h2 className="text-2xl font-semibold mb-6 text-center text-pink-500">Basic Information</h2>

                    <div className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
                            required
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Your age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
                            required
                        />
                    </div>

                    <div className="flex justify-between mt-8">
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="px-5 py-3 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
                        >
                            Next
                        </button>
                    </div>
                </form>
            )}

            {step === 2 && (
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleNext()
                    }}
                >
                    <h2 className="text-2xl font-semibold mb-6 text-center text-pink-500">What Are You Looking For?</h2>

                    <textarea
                        name="lookingFor"
                        rows={4}
                        placeholder="Describe what kind of connection you’re looking for..."
                        value={formData.lookingFor}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
                        required
                    ></textarea>

                    <div className="flex justify-between mt-8">
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="px-5 py-3 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
                        >
                            Next
                        </button>
                    </div>
                </form>
            )}

            {step === 3 && (
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-semibold mb-6 text-center text-pink-500">Your Daily Routine</h2>

                    <textarea
                        name="routine"
                        rows={4}
                        placeholder="Tell us about your typical day..."
                        value={formData.routine}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
                        required
                    ></textarea>

                    <div className="flex justify-between mt-8">
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="px-5 py-3 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}
