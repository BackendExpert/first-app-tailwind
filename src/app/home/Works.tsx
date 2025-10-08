export default function Works() {
    return (
        <section className="py-20 bg-gradient-to-r from-red-100 to-pink-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-pink-700 mb-12">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {[
                        { icon: '📱', title: 'Create a Profile', text: 'Tell us who you are and what you’re looking for.' },
                        { icon: '🔍', title: 'Find Matches', text: 'Explore profiles that truly match your vibe.' },
                        { icon: '💬', title: 'Start Chatting', text: 'Break the ice and start a real conversation.' },
                    ].map((step, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                            <div className="text-4xl mb-4 text-pink-500">{step.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-700">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}