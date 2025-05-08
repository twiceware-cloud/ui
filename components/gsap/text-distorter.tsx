"use client";

import { ReactNode, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrambleTextPlugin);

type TextDistorterProps = {
    scrambleChars?: string;
    className?: string;
    children: ReactNode;
};

export const TextDistorter = ({ children, scrambleChars = ".:", className }: TextDistorterProps) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            const element = wrapperRef.current!;

            const splitText = SplitText.create(element, { type: "chars", charsClass: "char" });

            splitText.chars.forEach((char) => {
                gsap.set(char, { attr: { "data-content": char.innerHTML } });
            });

            element.onpointermove = (e) => {
                splitText.chars.forEach((char) => {
                    const rect = char.getBoundingClientRect();
                    const cx = rect.left + rect.width / 2;
                    const cy = rect.top + rect.height / 2;
                    const dx = e.clientX - cx;
                    const dy = e.clientY - cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        gsap.to(char, {
                            overwrite: true,
                            duration: 2 - dist / 100,
                            scrambleText: {
                                // @ts-ignore
                                text: char.dataset.content,
                                chars: scrambleChars,
                                speed: 0.5,
                            },
                            ease: "bounce",
                        });
                    }
                });
            };
        },
        { scope: wrapperRef },
    );

    return (
        <div ref={wrapperRef} className={className}>
            {children}
        </div>
    );
};
