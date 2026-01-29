"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="text-2xl font-serif font-bold text-gradient"
                    whileHover={{ scale: 1.05 }}
                >
                    GLAM Artistry
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-white/70 hover:text-white text-sm tracking-wider uppercase transition-colors"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            whileHover={{ y: -2 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#contact"
                        className="px-6 py-2 bg-gradient-to-r from-accent-pink to-accent-purple text-white text-sm 
                       font-medium rounded-full hover:shadow-lg hover:shadow-accent-pink/30 transition-all"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book Now
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 ${isOpen ? "block" : "hidden"}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
            >
                <div className="flex flex-col p-6 gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white/70 hover:text-white text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="mt-4 px-6 py-3 bg-gradient-to-r from-accent-pink to-accent-purple text-white font-medium rounded-full text-center">
                        Book Now
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    );
}
