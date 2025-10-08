'use client';

export default function FAS() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-pink-700 mb-12">FAQs 🤔</h2>
                <div className="space-y-4">
                    <details className="bg-pink-50 p-4 rounded-md shadow-sm cursor-pointer open:shadow-md">
                        <summary className="font-semibold text-pink-700">Is the app free to use?</summary>
                        <p className="mt-2 text-gray-700">
                            Yes, you can join and explore for free. Premium features are optional.
                        </p>
                    </details>
                    <details className="bg-pink-50 p-4 rounded-md shadow-sm cursor-pointer open:shadow-md">
                        <summary className="font-semibold text-pink-700">How do I ensure my privacy?</summary>
                        <p className="mt-2 text-gray-700">
                            Your data is encrypted, and only matches can see limited profile info.
                        </p>
                    </details>
                    <details className="bg-pink-50 p-4 rounded-md shadow-sm cursor-pointer open:shadow-md">
                        <summary className="font-semibold text-pink-700">Can I delete my account anytime?</summary>
                        <p className="mt-2 text-gray-700">
                            Absolutely. You&apos;re in control of your data and presence on the platform.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
}
