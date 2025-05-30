import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Fira_Code, Work_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import React from "react";

import { cn } from "@/lib/utils";
import "@/styles/app.css";

export const metadata: Metadata = {
    title: {
        template: "%s | PaceUI",
        default: "PaceUI – Animated Components and Blocks for React Ecosystem",
    },
    description:
        "Animated components and building blocks built for smooth interaction and  rich detail. Copy, customise, and create without the extra setup.",

    keywords: [
        "tailwind",
        "tailwindcss",
        "shadcn",
        "next.js",
        "react",
        "animations",
        "web design",
        "copy-paste components",
        "gsap",
        "gsap react",
    ],
    icons: {
        icon: [
            {
                url: "/images/favicon-light.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/images/favicon-dark.png",
                media: "(prefers-color-scheme: dark)",
            },
        ],
        apple: [
            {
                url: "/images/favicon-light.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/images/favicon-dark.png",
                media: "(prefers-color-scheme: dark)",
            },
        ],
    },
    openGraph: {
        title: "PaceUI – Animated Components and Blocks for React Ecosystem",
        description:
            "Animated components and building blocks built for smooth interaction and  rich detail. Copy, customise, and create without the extra setup.",
        url: "https://paceui.com",
        siteName: "PaceUI",
        images: [
            {
                url: "https://paceui.com/images/og.jpg",
                alt: "PaceUI",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "PaceUI – Animated Components and Blocks for React Ecosystem",
        description:
            "Animated components and building blocks built for smooth interaction and  rich detail. Copy, customise, and create without the extra setup.",
    },
    alternates: {
        canonical: "https://paceui.com",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const sansFont = Work_Sans({ subsets: ["latin"], variable: "--font-sans" });
const monoFont = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("font-sans", sansFont.variable, monoFont.variable)}>
                <NextTopLoader height={1} showSpinner color="var(--color-primary)" />
                <NextThemesProvider attribute="class" defaultTheme="light">
                    {children}
                </NextThemesProvider>
                <Analytics />
            </body>
        </html>
    );
}
