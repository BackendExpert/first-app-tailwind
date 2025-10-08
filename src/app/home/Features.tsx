export default function Feature() {
    return (
        <section className="py-20 bg-gradient-to-r from-pink-600 to-red-500 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">What Makes Us Different?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:scale-105 transition transform duration-300">
                        <div className="text-white text-4xl mb-4">💖</div>
                        <h3 className="text-2xl font-semibold mb-2">Love-Driven AI</h3>
                        <p className="text-sm text-white/90">
                            Our advanced AI recommends matches based on personality traits, not just swipes.
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:scale-105 transition transform duration-300">
                        <div className="text-white text-4xl mb-4">🌐</div>
                        <h3 className="text-2xl font-semibold mb-2">Global Connections</h3>
                        <p className="text-sm text-white/90">
                            Find love beyond borders. Connect with singles around the world, anytime.
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:scale-105 transition transform duration-300">
                        <div className="text-white text-4xl mb-4">🎯</div>
                        <h3 className="text-2xl font-semibold mb-2">Zero Wasted Time</h3>
                        <p className="text-sm text-white/90">
                            No endless scrolling. Just real connections with real intentions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}