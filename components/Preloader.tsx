"use client";

import { motion } from "framer-motion";

interface PreloaderProps {
    progress: number;
}

export default function Preloader({ progress }: PreloaderProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: progress >= 100 ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ pointerEvents: progress >= 100 ? "none" : "auto" }}
        >
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-pink/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-teal/20 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-12">
                {/* Logo / Brand */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center"
                >
                    <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">
                        <span className="text-gradient">GLAM</span>
                    </h1>
                    <p className="text-white/50 text-sm md:text-base tracking-[0.3em] uppercase mt-2">
                        Beauty Artistry
                    </p>
                </motion.div>

                {/* Progress bar container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-64 md:w-80"
                >
                    {/* Progress bar background */}
                    <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
                        {/* Animated progress fill */}
                        <motion.div
                            className="absolute inset-y-0 left-0 rounded-full"
                            style={{
                                background: "linear-gradient(90deg, #FF69B4, #9B59B6, #00CED1)",
                                width: `${progress}%`,
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        />

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 animate-shimmer" />
                    </div>

                    {/* Progress text */}
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-white/40 text-xs tracking-wider uppercase">
                            Loading assets
                        </span>
                        <span className="text-white/60 text-sm font-medium tabular-nums">
                            {Math.round(progress)}%
                        </span>
                    </div>
                </motion.div>

                {/* Loading message */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-white/30 text-xs tracking-widest uppercase"
                >
                    Preparing your experience
                </motion.p>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10" />
        </motion.div>
    );
}
