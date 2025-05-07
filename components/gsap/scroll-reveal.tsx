"use client";

import { ReactNode, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
    children: ReactNode;
    type?: "fade-in" | "slide-in-right" | "zoom-in" | "blur-in";
};

export const ScrollReveal = ({ children, type = "fade-in" }: ScrollRevealProps) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const tween = useRef<gsap.core.Tween | null>(null);

    useGSAP(
        () => {
            const el = wrapperRef.current;
            if (!el) return;

            // Clean Up
            tween.current?.scrollTrigger?.kill();
            tween.current?.kill();
            gsap.set(el, { clearProps: "all" });

            switch (type) {
                case "fade-in":
                    tween.current = gsap.fromTo(
                        el,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            scrollTrigger: {
                                trigger: el,
                                start: "top 80%",
                                toggleActions: "play pause play reverse",
                            },
                        },
                    );
                    break;
                case "slide-in-right":
                    tween.current = gsap.fromTo(
                        el,
                        { x: 100, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            scrollTrigger: {
                                trigger: el,
                                start: "top 80%",
                                toggleActions: "play reverse play reverse",
                            },
                        },
                    );
                    break;
                case "zoom-in":
                    tween.current = gsap.fromTo(
                        el,
                        { scale: 0.8, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 1,
                            scrollTrigger: {
                                trigger: el,
                                start: "top 80%",
                                toggleActions: "play reverse play reverse",
                            },
                        },
                    );
                    break;

                case "blur-in":
                    tween.current = gsap.fromTo(
                        el,
                        { y: 30, opacity: 0, filter: "blur(10px)" },
                        {
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            duration: 1,
                            scrollTrigger: {
                                trigger: el,
                                start: "top 80%",
                                toggleActions: "play reverse play reverse",
                            },
                        },
                    );
                    break;
            }
            return () => {
                tween.current?.scrollTrigger?.kill();
                tween.current?.kill();
            };
        },
        { scope: wrapperRef, dependencies: [type] },
    );

    return <div ref={wrapperRef}>{children}</div>;
};
