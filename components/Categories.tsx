"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const categories = [
    {
        id: 1,
        name: "Lips",
        description: "Bold colors that speak volumes",
        image: "/products/lipstick.png",
        color: "from-pink-500 to-red-500",
    },
    {
        id: 2,
        name: "Eyes",
        description: "Define your mesmerizing gaze",
        image: "/products/eyeshadow.png",
        color: "from-purple-500 to-indigo-500",
    },
    {
        id: 3,
        name: "Face",
        description: "Flawless foundation for every skin",
        image: "/products/lipstick.png",
        color: "from-amber-400 to-orange-500",
    },
    {
        id: 4,
        name: "Brushes",
        description: "Professional tools for perfect application",
        image: "/frames/100.png",
        color: "from-teal-400 to-cyan-500",
    },
];

export default function Categories() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section
            id="categories"
            ref={containerRef}
            className="relative py-32 bg-black overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Shop by <span className="text-gradient">Category</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Discover our curated collections designed to enhance your natural beauty
                    </p>
                </motion.div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <motion.h3
                                    className="font-serif text-4xl md:text-5xl font-bold text-white mb-2"
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                >
                                    {category.name}
                                </motion.h3>
                                <p className="text-white/70 text-lg mb-6 max-w-xs">
                                    {category.description}
                                </p>
                                <motion.button
                                    className="w-fit px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full 
                             border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Explore Collection
                                </motion.button>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/30 group-hover:border-white/60 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
