"use client";

import { ReactNode, useEffect, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

type TextScramblerProps = {
    random?: boolean;
    className?: string;
    children: ReactNode;
    scrambleOnLoad?: boolean;
};

const defaultChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const TextScrambler = ({ children, scrambleOnLoad = true, random = true, className }: TextScramblerProps) => {
    const textRef = useRef<HTMLDivElement | null>(null);

    const { contextSafe } = useGSAP();

    const scramble = contextSafe(() => {
        const target = textRef.current;
        if (gsap.isTweening(target) || !target) return;
        gsap.to(target, {
            duration: 1,
            ease: "sine.in",
            scrambleText: {
                text: target.innerText,
                speed: 2,
                chars: random ? defaultChars : target.innerText.replace(/\s/g, ""),
            },
        });
    });

    useEffect(() => {
        if (scrambleOnLoad) scramble();
        const target = textRef.current;
        target?.addEventListener("pointerenter", scramble);
        return () => target?.removeEventListener("pointerenter", scramble);
    }, [textRef, scramble, scrambleOnLoad]);

    return (
        <div ref={textRef} className={className}>
            {children}
        </div>
    );
};
