"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
    {
        icon: "📍",
        title: "Location",
        value: "New York, NY",
        subtext: "Available for travel worldwide",
    },
    {
        icon: "📧",
        title: "Email",
        value: "hello@glamartistry.com",
        subtext: "Response within 24 hours",
    },
    {
        icon: "📱",
        title: "Phone",
        value: "+1 (555) 123-4567",
        subtext: "Mon-Sat, 9am-6pm",
    },
];

const socialLinks = [
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "TikTok", icon: "🎵", href: "#" },
    { name: "Pinterest", icon: "📌", href: "#" },
    { name: "YouTube", icon: "▶️", href: "#" },
];

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        date: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "6b5a3597-a55d-48f3-b79c-fb50cd765d92",
                    name: formData.name,
                    email: formData.email,
                    service: formData.service,
                    date: formData.date,
                    message: formData.message,
                    subject: `New GLAM Booking: ${formData.name}`,
                    from_name: "GLAM Beauty Artistry",
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", service: "", date: "", message: "" });
            } else {
                console.error("Web3Forms Error:", data);
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-32 bg-gradient-to-b from-black to-black/95 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent-pink/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-3xl" />
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
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Ready to book your session or have questions? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-serif text-3xl font-bold text-white mb-8">
                            Get in Touch
                        </h3>

                        <div className="space-y-6 mb-12">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="text-3xl">{item.icon}</span>
                                    <div>
                                        <p className="text-white/50 text-sm uppercase tracking-wider">{item.title}</p>
                                        <p className="text-white font-medium text-lg">{item.value}</p>
                                        <p className="text-white/40 text-sm">{item.subtext}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-white/50 text-sm uppercase tracking-wider mb-4">Follow My Work</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center
                               hover:bg-white/10 hover:border-white/20 transition-all"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        title={social.name}
                                    >
                                        <span className="text-xl">{social.icon}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-white/50 text-sm uppercase tracking-wider mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white
                               focus:border-accent-pink focus:outline-none transition-colors"
                                        placeholder="Jane Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white/50 text-sm uppercase tracking-wider mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white
                               focus:border-accent-pink focus:outline-none transition-colors"
                                        placeholder="jane@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-white/50 text-sm uppercase tracking-wider mb-2">
                                        Service Interested In
                                    </label>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white
                               focus:border-accent-pink focus:outline-none transition-colors"
                                        required
                                    >
                                        <option value="" className="bg-black">Select a service</option>
                                        <option value="bridal" className="bg-black">Bridal Makeup</option>
                                        <option value="editorial" className="bg-black">Editorial & Fashion</option>
                                        <option value="special" className="bg-black">Special Occasions</option>
                                        <option value="lessons" className="bg-black">Makeup Lessons</option>
                                        <option value="other" className="bg-black">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-white/50 text-sm uppercase tracking-wider mb-2">
                                        Event Date
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white
                               focus:border-accent-pink focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-white/50 text-sm uppercase tracking-wider mb-2">
                                    Tell Me About Your Vision
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white
                             focus:border-accent-pink focus:outline-none transition-colors resize-none"
                                    placeholder="Describe your event, desired look, or any questions you have..."
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-teal 
                           text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-purple/30 transition-all
                           disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </motion.button>

                            {submitStatus === "success" && (
                                <motion.p
                                    className="text-accent-teal text-center font-medium"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    Message sent successfully! I'll get back to you soon.
                                </motion.p>
                            )}

                            {submitStatus === "error" && (
                                <motion.p
                                    className="text-red-500 text-center font-medium text-sm mt-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    Submission failed. Please check the Console (F12) for details OR ensure you've verified your email with Web3Forms.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
