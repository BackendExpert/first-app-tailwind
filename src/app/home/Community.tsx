export default function Community() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-pink-700 mb-12">Meet Our Lovely Community 🌟</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['Emily', 'Jason', 'Mia', 'Liam'].map((name, index) => (
                        <div
                            key={index}
                            className="bg-pink-50 p-4 rounded-xl shadow hover:scale-105 transition transform duration-300"
                        >
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-pink-200 overflow-hidden">
                                <img
                                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${index + 20}.jpg`}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-pink-700">{name}</h3>
                            <p className="text-sm text-gray-600">“Excited to meet new people!”</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}