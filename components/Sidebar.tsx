"use client";

import { motion } from "framer-motion";

const socialLinks = [
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
    {
        name: "TikTok",
        href: "https://tiktok.com",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
        ),
    },
    {
        name: "Pinterest",
        href: "https://pinterest.com",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 00-4.37 23.17c-.1-.937-.2-2.38.04-3.4.22-.91 1.4-5.93 1.4-5.93a4.08 4.08 0 01-.34-1.68c0-1.58.92-2.76 2.06-2.76a1.43 1.43 0 011.44 1.6c0 .98-.62 2.45-.94 3.81a1.65 1.65 0 001.68 2.05c2.02 0 3.57-2.13 3.57-5.2 0-2.72-1.95-4.62-4.75-4.62a4.92 4.92 0 00-5.14 4.93 4.4 4.4 0 00.85 2.6.34.34 0 01.08.33c-.09.36-.28 1.14-.32 1.3-.05.2-.17.25-.39.15-1.46-.68-2.37-2.8-2.37-4.51 0-3.67 2.67-7.04 7.69-7.04 4.04 0 7.17 2.88 7.17 6.73 0 4.01-2.53 7.24-6.04 7.24a3.14 3.14 0 01-2.74-1.37l-.75 2.84a13.23 13.23 0 01-1.5 3.16A12 12 0 1012 0z" />
            </svg>
        ),
    },
    {
        name: "YouTube",
        href: "https://youtube.com",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
];

const quickNav = [
    { label: "Home", href: "#hero" },
    { label: "Work", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
    return (
        <>
            {/* Left Sidebar - Social Links */}
            <motion.div
                className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                {/* Vertical line top */}
                <div className="w-px h-20 bg-gradient-to-b from-transparent to-white/30" />

                {/* Social icons */}
                <div className="flex flex-col gap-4">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center
                         text-white/50 hover:text-accent-pink hover:bg-white/10 hover:border-accent-pink/50 
                         transition-all duration-300"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            title={social.name}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                {/* Vertical line bottom */}
                <div className="w-px h-20 bg-gradient-to-t from-transparent to-white/30" />

                {/* Follow text */}
                <motion.span
                    className="text-white/40 text-xs tracking-widest uppercase"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                >
                    Follow Me
                </motion.span>
            </motion.div>

            {/* Right Sidebar - Quick Navigation Dots */}
            <motion.div
                className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                {/* Navigation label */}
                <motion.span
                    className="text-white/40 text-xs tracking-widest uppercase mb-4"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    Navigate
                </motion.span>

                {/* Navigation dots */}
                <div className="flex flex-col gap-4">
                    {quickNav.map((item, index) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            className="group flex items-center gap-3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                            whileHover={{ x: -5 }}
                        >
                            {/* Label on hover */}
                            <span className="opacity-0 group-hover:opacity-100 text-white/70 text-xs tracking-wider uppercase transition-opacity duration-300">
                                {item.label}
                            </span>
                            {/* Dot */}
                            <div className="w-3 h-3 rounded-full border border-white/30 group-hover:border-accent-pink 
                              group-hover:bg-accent-pink/50 transition-all duration-300" />
                        </motion.a>
                    ))}
                </div>

                {/* Decorative line */}
                <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent mt-4" />
            </motion.div>
        </>
    );
}
