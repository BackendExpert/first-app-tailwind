import { FaFacebookF, FaInstagram, FaTwitter, FaHeart, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-rose-600 via-pink-500 to-rose-400 text-white pt-10 pb-4">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Column 1 - Brand */}
                <div>
                    <div className="flex items-center space-x-2 mb-3">
                        <FaHeart className="text-yellow-300 text-xl" />
                        <h1 className="text-2xl font-extrabold">LoveConnect</h1>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                        Connecting hearts, building meaningful relationships.
                        Discover love that lasts forever with LoveConnect 💕
                    </p>
                </div>

                {/* Column 2 - Quick Links */}
                <div>
                    <h2 className="font-semibold text-lg mb-3 border-b border-white/30 inline-block pb-1">
                        Quick Links
                    </h2>
                    <ul className="space-y-2 text-sm text-white/90">
                        <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
                        <li><a href="/about-us" className="hover:text-yellow-300 transition">About Us</a></li>
                        <li><a href="/services" className="hover:text-yellow-300 transition">Services</a></li>
                        <li><a href="/contact-us" className="hover:text-yellow-300 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3 - Policies */}
                <div>
                    <h2 className="font-semibold text-lg mb-3 border-b border-white/30 inline-block pb-1">
                        Legal
                    </h2>
                    <ul className="space-y-2 text-sm text-white/90">
                        <li><a href="/privacy-policy" className="hover:text-yellow-300 transition">Privacy Policy</a></li>
                        <li><a href="/terms-and-conditions" className="hover:text-yellow-300 transition">Terms & Conditions</a></li>
                        <li><a href="/support" className="hover:text-yellow-300 transition">Support</a></li>
                    </ul>
                </div>

                {/* Column 4 - Social Media */}
                <div>
                    <h2 className="font-semibold text-lg mb-3 border-b border-white/30 inline-block pb-1">
                        Follow Us
                    </h2>
                    <div className="flex space-x-4 text-xl">
                        <a href="#" className="hover:text-yellow-300 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-white/80">
                © {new Date().getFullYear()} <span className="font-semibold">LoveConnect</span>.
                All rights reserved 💖 | Built with ❤️ by <span className="font-semibold">JehanKandy</span>
            </div>
        </footer>
    );
}
