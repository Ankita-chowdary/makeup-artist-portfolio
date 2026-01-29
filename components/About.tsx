"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "8+", label: "Years Experience" },
    { number: "150+", label: "Bridal Looks" },
    { number: "50+", label: "Editorial Shoots" },
];

export default function About() {
    return (
        <section id="about" className="relative py-32 bg-black overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-teal/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                            <Image
                                src="/frames/150.png"
                                alt="Makeup Artist"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </div>

                        {/* Floating accent card */}
                        <motion.div
                            className="absolute -bottom-8 -right-8 p-6 bg-gradient-to-br from-accent-pink to-accent-purple rounded-2xl shadow-2xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-white font-serif text-lg italic">
                                "Beauty is about enhancing<br />what you have naturally"
                            </p>
                        </motion.div>

                        {/* Decorative frame */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-accent-pink/50 rounded-tl-3xl" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className="lg:pl-8"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
                            About <span className="text-gradient">Me</span>
                        </h2>

                        <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                            <p>
                                Hi, I'm <span className="text-white font-semibold">GLAM Artistry</span>, a professional makeup artist
                                with over 8 years of experience in transforming faces and boosting confidence.
                            </p>
                            <p>
                                My journey began with a simple passion for colors and creativity. Today, I specialize in
                                bridal makeup, editorial looks, and teaching others the art of self-expression through makeup.
                            </p>
                            <p>
                                I believe that makeup isn't about hiding who you are—it's about celebrating your unique beauty
                                and helping you feel like the best version of yourself.
                            </p>
                        </div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-white/50 text-sm uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            className="mt-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <motion.a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full
                           hover:shadow-lg hover:shadow-white/20 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let's Work Together
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
