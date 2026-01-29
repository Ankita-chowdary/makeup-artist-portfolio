"use client";

import { useState } from "react";
import MakeupScroll from "@/components/MakeupScroll";
import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    const handleProgressUpdate = (progress: number) => {
        setLoadingProgress(progress);
    };

    return (
        <main className="relative bg-black min-h-screen">
            {/* Preloader */}
            {isLoading && <Preloader progress={loadingProgress} />}

            {/* Navigation - visible after loading */}
            {!isLoading && <Navigation />}

            {/* Floating Sidebars - visible after loading */}
            {!isLoading && <Sidebar />}

            {/* Hero Section with Scroll Animation */}
            <section id="hero">
                <MakeupScroll
                    onLoadComplete={handleLoadingComplete}
                    onProgressUpdate={handleProgressUpdate}
                />
            </section>

            {/* Portfolio Gallery */}
            <Portfolio />

            {/* Services */}
            <Services />

            {/* About */}
            <About />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <Footer />
        </main>
    );
}
