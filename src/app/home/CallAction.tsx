export default function CallAction() {
    return (
        <section className="relative py-20 bg-gradient-to-r from-pink-600 to-red-500 text-white text-center overflow-hidden">
            {/* Decorative blurred circles */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-pink-300 rounded-full mix-blend-overlay blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-52 h-52 bg-red-300 rounded-full mix-blend-overlay blur-3xl opacity-30 animate-ping"></div>

            <div className="relative z-10 px-6">
                <h2 className="text-4xl font-bold mb-4">Start Your Love Journey Today 💘</h2>
                <p className="text-lg mb-8">Sign up now and discover someone special just around the corner!</p>
                <button className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full hover:bg-pink-100 transition duration-300 shadow-md">
                    Join Now
                </button>
            </div>
        </section>
    )
}