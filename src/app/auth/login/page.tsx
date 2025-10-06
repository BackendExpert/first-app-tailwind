'use client'

import WebSiteLayout from "@/layouts/WebsiteLayout"

export default function Login() {
    return (
        <WebSiteLayout>
            <section className="relative min-h-screen flex items-center justify-center bg-black/40 px-4 text-white overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://wallpapercave.com/wp/wp11949847.jpg')",
                    }}
                />
                {/* Overlay for better contrast */}
                <div className="absolute inset-0 bg-black/0" />

                {/* Content */}
                <div className="relative z-10 bg-white text-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl p-8 backdrop-blur-sm -mt-10">
                    <h1 className="text-2xl font-semibold mb-4 text-center">
                        Login
                    </h1>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Natus nulla mollitia quae blanditiis tempore exercitationem
                        impedit quasi reiciendis accusamus odit fugiat deleniti, id ut
                        facilis ullam similique dolorum sapiente autem!
                    </p>
                </div>
            </section>
        </WebSiteLayout>
    )
}
