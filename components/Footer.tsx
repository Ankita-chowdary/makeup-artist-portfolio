"use client";

import { motion } from "framer-motion";

const footerLinks = {
    services: [
        { name: "Bridal Makeup", href: "#services" },
        { name: "Editorial", href: "#services" },
        { name: "Special Events", href: "#services" },
        { name: "Makeup Lessons", href: "#services" },
    ],
    quick: [
        { name: "Portfolio", href: "#portfolio" },
        { name: "About Me", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Book Now", href: "#contact" },
    ],
    social: [
        { name: "Instagram", href: "#" },
        { name: "TikTok", href: "#" },
        { name: "Pinterest", href: "#" },
        { name: "YouTube", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-serif text-3xl font-bold text-gradient mb-4">
                            GLAM Artistry
                        </h3>
                        <p className="text-white/50 leading-relaxed mb-6">
                            Professional makeup artistry for your most beautiful moments.
                            Let's create magic together.
                        </p>
                        <div className="flex gap-4">
                            {footerLinks.social.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/50 hover:text-accent-pink transition-colors text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/50 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.quick.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/50 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
                            Stay Updated
                        </h4>
                        <p className="text-white/50 text-sm mb-4">
                            Subscribe for beauty tips and exclusive offers.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm
                           focus:border-accent-pink focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-gradient-to-r from-accent-pink to-accent-purple text-white text-sm font-medium rounded-lg
                           hover:shadow-lg hover:shadow-accent-pink/30 transition-all"
                            >
                                Join
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <motion.div
                    className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="text-white/40 text-sm">
                        © 2024 GLAM Artistry. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-white/40 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative gradient line */}
            <div className="h-1 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-teal" />
        </footer>
    );
}
