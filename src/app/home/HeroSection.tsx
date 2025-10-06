export default function HeroSection() {
    return (
        <div>
            <section className="relative min-h-screen flex items-center justify-center text-white px-4">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://wallpapercave.com/wp/wp7748878.jpg')",
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/70 to-red-600/70" />

                {/* Content */}
                <div className="relative z-10 max-w-4xl text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        Find Your Perfect Match ❤️
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                        Join our vibrant dating community and meet someone special today!
                    </p>
                    <div>
                        <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-full hover:bg-pink-100 transition">
                            Get Started
                        </button>
                        <button className="ml-4 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-pink-600 transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}