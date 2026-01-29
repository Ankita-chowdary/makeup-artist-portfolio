"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import TextOverlay from "./TextOverlay";

interface MakeupScrollProps {
    onLoadComplete: () => void;
    onProgressUpdate: (progress: number) => void;
}

// Frame configuration
const FRAME_COUNT = 196;
const FRAME_START = 1;
const FRAME_GAP_START = 16;
const FRAME_GAP_END = 19;

// Generate frame numbers accounting for the gap (016-019 don't exist)
function getFrameNumbers(): number[] {
    const frames: number[] = [];
    for (let i = FRAME_START; i <= 200; i++) {
        if (i >= FRAME_GAP_START && i <= FRAME_GAP_END) continue;
        frames.push(i);
    }
    return frames;
}

const frameNumbers = getFrameNumbers();

export default function MakeupScroll({
    onLoadComplete,
    onProgressUpdate,
}: MakeupScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const rafRef = useRef<number | null>(null);
    const lastDrawnFrame = useRef<number>(-1);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to frame index
    const frameIndex = useTransform(
        scrollYProgress,
        [0, 1],
        [0, FRAME_COUNT - 1]
    );

    // Listen to frame changes
    useMotionValueEvent(frameIndex, "change", (latest) => {
        setCurrentFrame(Math.round(latest));
    });

    // Preload all images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        const preloadImage = (frameNum: number, index: number) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                const paddedNum = String(frameNum).padStart(3, "0");
                img.src = `/frames/${paddedNum}.png`;

                img.onload = () => {
                    loadedImages[index] = img;
                    loadedCount++;
                    const progress = (loadedCount / FRAME_COUNT) * 100;
                    onProgressUpdate(progress);

                    if (loadedCount === FRAME_COUNT) {
                        setImages(loadedImages);
                        setIsLoaded(true);
                        setTimeout(onLoadComplete, 500);
                    }
                    resolve();
                };

                img.onerror = () => {
                    console.warn(`Failed to load frame ${paddedNum}`);
                    loadedCount++;
                    onProgressUpdate((loadedCount / FRAME_COUNT) * 100);
                    resolve();
                };
            });
        };

        // Load all frames
        frameNumbers.forEach((frameNum, index) => {
            preloadImage(frameNum, index);
        });

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [onLoadComplete, onProgressUpdate]);

    // Draw frame on canvas with requestAnimationFrame for smoothness
    const drawFrame = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (!canvas || !ctx || images.length === 0) {
            rafRef.current = requestAnimationFrame(drawFrame);
            return;
        }

        // Only redraw if frame changed
        if (lastDrawnFrame.current === currentFrame) {
            rafRef.current = requestAnimationFrame(drawFrame);
            return;
        }

        const img = images[currentFrame];
        if (!img) {
            rafRef.current = requestAnimationFrame(drawFrame);
            return;
        }

        // Set canvas size to match window
        const dpr = window.devicePixelRatio || 1;
        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;

        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
        canvas.style.width = `${displayWidth}px`;
        canvas.style.height = `${displayHeight}px`;

        ctx.scale(dpr, dpr);

        // Clear canvas with black background
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, displayWidth, displayHeight);

        // Calculate object-contain dimensions
        const imgRatio = img.width / img.height;
        const canvasRatio = displayWidth / displayHeight;

        let drawWidth, drawHeight, drawX, drawY;

        if (imgRatio > canvasRatio) {
            // Image is wider than canvas ratio
            drawWidth = displayWidth;
            drawHeight = displayWidth / imgRatio;
            drawX = 0;
            drawY = (displayHeight - drawHeight) / 2;
        } else {
            // Image is taller than canvas ratio
            drawHeight = displayHeight;
            drawWidth = displayHeight * imgRatio;
            drawX = (displayWidth - drawWidth) / 2;
            drawY = 0;
        }

        // Draw the image centered with object-contain
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

        lastDrawnFrame.current = currentFrame;
        rafRef.current = requestAnimationFrame(drawFrame);
    }, [images, currentFrame]);

    // Start the render loop when loaded
    useEffect(() => {
        if (isLoaded && images.length > 0) {
            rafRef.current = requestAnimationFrame(drawFrame);
        }

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [isLoaded, images, drawFrame]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            lastDrawnFrame.current = -1; // Force redraw on resize
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={containerRef} className="relative h-[600vh]">
            {/* Sticky canvas container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                />

                {/* Gradient overlays for cinematic effect */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Top vignette */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
                    {/* Bottom vignette */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
                    {/* Side vignettes */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/20 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/20 to-transparent" />
                </div>
            </div>

            {/* Text overlays */}
            <TextOverlay containerRef={containerRef} />

            {/* Scroll indicator at bottom */}
            {isLoaded && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <div className="flex flex-col items-center gap-2 text-white/40">
                        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
}
