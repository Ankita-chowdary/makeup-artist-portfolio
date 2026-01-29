"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const BASE_PATH = "/makeup-artist-portfolio";

const portfolioItems = [
    {
        id: 1,
        title: "Bridal Glam",
        category: "Bridal",
        image: `${BASE_PATH}/products/lipstick.png`,
    },
    {
        id: 2,
        title: "Editorial Fantasy",
        category: "Editorial",
        image: `${BASE_PATH}/products/eyeshadow.png`,
    },
    {
        id: 3,
        title: "Natural Beauty",
        category: "Natural",
        image: `${BASE_PATH}/frames/080.png`,
    },
    {
        id: 4,
        title: "Bold & Dramatic",
        category: "Glam",
        image: `${BASE_PATH}/frames/120.png`,
    },
    {
        id: 5,
        title: "Soft Romance",
        category: "Bridal",
        image: `${BASE_PATH}/frames/160.png`,
    },
    {
        id: 6,
        title: "Avant-Garde",
        category: "Editorial",
        image: `${BASE_PATH}/frames/200.png`,
    },
];

const categories = ["All", "Bridal", "Editorial", "Natural", "Glam"];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems =
        activeCategory === "All"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeCategory);

    return (
        <section id="portfolio" className="relative py-32 bg-black overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-pink/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        My <span className="text-gradient">Portfolio</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Explore a collection of my finest makeup artistry work, from bridal elegance to editorial fantasy
                    </p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-gradient-to-r from-accent-pink to-accent-purple text-white shadow-lg shadow-accent-pink/30"
                                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Portfolio Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    layout
                >
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            layout
                            whileHover={{ y: -10 }}
                        >
                            {/* Image */}
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <span className="text-accent-pink text-sm font-medium tracking-wider uppercase mb-2">
                                    {item.category}
                                </span>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                                    {item.title}
                                </h3>

                                {/* View button on hover */}
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <motion.button
                                        className="px-6 py-3 bg-white text-black font-medium rounded-full"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Work
                                    </motion.button>
                                </motion.div>
                            </div>

                            {/* Corner decoration */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 group-hover:border-accent-pink transition-colors duration-300" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-medium rounded-full
                       hover:bg-white hover:text-black transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Full Portfolio
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
