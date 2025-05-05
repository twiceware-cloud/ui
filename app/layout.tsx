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
        default: "PaceUI – GSAP Animated Tailwind CSS Components for the React Ecosystem",
    },
    description:
        "Bring your UI to life with GSAP-powered Tailwind components. PaceUI offers clean, animated UI blocks ready to drop into any React, Next.js, or React-based project.",

    keywords: [
        "tailwind",
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
        title: "PaceUI – GSAP Animated Tailwind CSS Components for the React Ecosystem",
        description:
            "Bring your UI to life with GSAP-powered Tailwind components. PaceUI offers clean, animated UI blocks ready to drop into any React, Next.js, or React-based project.",
        url: "https://paceui.com",
        siteName: "PaceUI",
    },
    twitter: {
        card: "summary_large_image",
        title: "PaceUI – GSAP Animated Tailwind CSS Components for the React Ecosystem",
        description:
            "Bring your UI to life with GSAP-powered Tailwind components. PaceUI offers clean, animated UI blocks ready to drop into any React, Next.js, or React-based project.",
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
            </body>
        </html>
    );
}
