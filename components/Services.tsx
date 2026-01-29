"use client";

import { motion } from "framer-motion";

const services = [
    {
        id: 1,
        title: "Bridal Makeup",
        description: "Your perfect look for the most special day. Includes trial session, day-of application, and touch-up kit.",
        price: "Starting at $500",
        features: ["Bridal Trial", "Day-of Makeup", "Touch-up Kit", "Lash Application"],
        icon: "💍",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        id: 2,
        title: "Editorial & Fashion",
        description: "Creative and avant-garde looks for photoshoots, fashion shows, and magazine features.",
        price: "Starting at $300",
        features: ["Creative Direction", "Multiple Looks", "On-Set Touch-ups", "Product Styling"],
        icon: "📸",
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        id: 3,
        title: "Special Occasions",
        description: "Glamorous makeup for parties, proms, galas, and any event worth celebrating.",
        price: "Starting at $150",
        features: ["Event Consultation", "Full Makeup", "Lash Application", "Setting Spray"],
        icon: "✨",
        gradient: "from-amber-400 to-orange-500",
    },
    {
        id: 4,
        title: "Makeup Lessons",
        description: "Learn professional techniques tailored to your features and skill level.",
        price: "Starting at $200",
        features: ["Personalized Tutorial", "Product Recommendations", "Technique Guide", "Practice Session"],
        icon: "🎨",
        gradient: "from-teal-400 to-cyan-500",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-32 bg-gradient-to-b from-black via-black/95 to-black overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-purple/5 rounded-full blur-3xl" />
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
                        My <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Professional makeup artistry tailored to your unique style and occasion
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm
                         hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Gradient accent */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Icon */}
                            <div className="text-5xl mb-6">{service.icon}</div>

                            {/* Title & Description */}
                            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
                                {service.title}
                            </h3>
                            <p className="text-white/60 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/70">
                                        <span className="w-1.5 h-1.5 bg-accent-pink rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Price & CTA */}
                            <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                <span className="text-xl font-semibold text-gradient">
                                    {service.price}
                                </span>
                                <motion.button
                                    className={`px-6 py-2 bg-gradient-to-r ${service.gradient} text-white font-medium rounded-full
                             opacity-80 group-hover:opacity-100 transition-opacity`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Book Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Custom Services CTA */}
                <motion.div
                    className="mt-16 text-center p-12 rounded-3xl bg-gradient-to-r from-accent-pink/10 via-accent-purple/10 to-accent-teal/10 border border-white/10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-serif text-3xl font-bold text-white mb-4">
                        Need Something Custom?
                    </h3>
                    <p className="text-white/60 max-w-xl mx-auto mb-8">
                        Every client is unique. Let's discuss your vision and create a personalized package just for you.
                    </p>
                    <motion.a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:shadow-lg hover:shadow-white/20 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
