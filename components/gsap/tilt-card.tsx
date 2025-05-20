"use client";

import { ReactNode, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

type TiltCardProps = {
    maxTilt?: number;
    highlightClass?: string;
    className?: string;
    children: ReactNode;
};

export const TiltCard = ({ children, highlightClass, className, maxTilt = 10 }: TiltCardProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const highlightRef = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            const container = containerRef.current;
            const card = cardRef.current;
            const highlight = highlightRef.current;
            if (!container || !card || !highlight) return;

            const handleMouseLeave = () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.6,
                    ease: "power3.out",
                });
            };

            const handleMouseMove = (e: MouseEvent) => {
                const bounds = card.getBoundingClientRect();
                const offsetX = e.clientX - bounds.left;
                const offsetY = e.clientY - bounds.top;
                const centerX = bounds.width / 2;
                const centerY = bounds.height / 2;
                const percentX = (offsetX - centerX) / centerX;
                const percentY = (offsetY - centerY) / centerY;

                gsap.to(card, {
                    rotateY: percentX * maxTilt,
                    rotateX: -percentY * maxTilt,
                    duration: 0.3,
                    ease: "power3.out",
                });
                gsap.to(highlight, {
                    left: bounds.width - offsetX + "px",
                    top: bounds.height - offsetY + "px",
                    duration: 0.3,
                    ease: "power3.out",
                });
            };

            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        },
        { scope: containerRef },
    );

    return (
        <div
            ref={containerRef}
            style={{
                perspective: "1000px",
                position: "relative",
            }}>
            <div ref={cardRef} className={className}>
                {children}
            </div>
            <div
                ref={highlightRef}
                className={highlightClass}
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    borderRadius: "50%",
                    userSelect: "none",
                    filter: "blur(28px)",
                    transform: "translate(-50%, -50%)",
                    top: 0,
                }}></div>
        </div>
    );
};
