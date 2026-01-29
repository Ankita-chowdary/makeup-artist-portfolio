import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "GLAM Beauty | Pure Artistry",
    description: "Experience the art of makeup through an immersive visual journey. Where color meets magic.",
    keywords: ["makeup", "beauty", "cosmetics", "brush", "glam", "artistry"],
    openGraph: {
        title: "GLAM Beauty | Pure Artistry",
        description: "Experience the art of makeup through an immersive visual journey.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
