"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TextSection {
    text: string;
    subtext?: string;
    alignment: "left" | "center" | "right";
    startProgress: number;
    endProgress: number;
    isCTA?: boolean;
}

const textSections: TextSection[] = [
    {
        text: "GLAM Beauty",
        subtext: "Pure Artistry",
        alignment: "center",
        startProgress: 0,
        endProgress: 0.15,
    },
    {
        text: "The journey begins",
        subtext: "with the brush",
        alignment: "left",
        startProgress: 0.25,
        endProgress: 0.40,
    },
    {
        text: "Crafted for Color",
        subtext: "Made for Magic",
        alignment: "right",
        startProgress: 0.50,
        endProgress: 0.65,
    },
    {
        text: "Unleash Your Glow",
        subtext: "Shop the Collection",
        alignment: "center",
        startProgress: 0.80,
        endProgress: 1.0,
        isCTA: true,
    },
];

interface TextOverlayProps {
    containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function TextOverlay({ containerRef }: TextOverlayProps) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div className="fixed inset-0 z-10 pointer-events-none">
            {textSections.map((section, index) => (
                <TextSectionComponent
                    key={index}
                    section={section}
                    scrollProgress={scrollYProgress}
                />
            ))}
        </div>
    );
}

interface TextSectionComponentProps {
    section: TextSection;
    scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function TextSectionComponent({ section, scrollProgress }: TextSectionComponentProps) {
    const midPoint = (section.startProgress + section.endProgress) / 2;
    const fadeInEnd = section.startProgress + (midPoint - section.startProgress) * 0.5;
    const fadeOutStart = midPoint + (section.endProgress - midPoint) * 0.5;

    const opacity = useTransform(
        scrollProgress,
        [section.startProgress, fadeInEnd, fadeOutStart, section.endProgress],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollProgress,
        [section.startProgress, fadeInEnd, fadeOutStart, section.endProgress],
        [60, 0, 0, -60]
    );

    const scale = useTransform(
        scrollProgress,
        [section.startProgress, fadeInEnd, fadeOutStart, section.endProgress],
        [0.9, 1, 1, 0.9]
    );

    const alignmentClasses = {
        left: "items-start text-left pl-8 md:pl-16 lg:pl-24",
        center: "items-center text-center",
        right: "items-end text-right pr-8 md:pr-16 lg:pr-24",
    };

    return (
        <motion.div
            className={`absolute inset-0 flex flex-col justify-center ${alignmentClasses[section.alignment]}`}
            style={{ opacity, y, scale }}
        >
            <div className="max-w-xl">
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 leading-tight">
                    {section.text}
                </h2>
                {section.subtext && (
                    <p className={`mt-4 text-lg md:text-xl lg:text-2xl ${section.isCTA ? 'text-gradient font-semibold' : 'text-white/70'}`}>
                        {section.subtext}
                    </p>
                )}
                {section.isCTA && (
                    <motion.button
                        className="mt-8 px-8 py-4 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-teal 
                       text-white font-semibold rounded-full pointer-events-auto
                       hover:shadow-lg hover:shadow-accent-purple/50 transition-all duration-300
                       animate-pulse-glow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Now
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
}
