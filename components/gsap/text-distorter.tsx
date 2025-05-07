"use client";

import { ReactNode, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrambleTextPlugin);

type TextDistorterProps = {
    customChar?: string;
    className?: string;
    children: ReactNode;
};

export const TextDistorter = ({ children, customChar = ".:", className }: TextDistorterProps) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            const textBlock = wrapperRef.current!;

            const st = SplitText.create(textBlock, { type: "chars", charsClass: "char" });

            st.chars.forEach((char) => {
                gsap.set(char, { attr: { "data-content": char.innerHTML } });
            });

            textBlock.onpointermove = (e) => {
                st.chars.forEach((char) => {
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
                                chars: customChar,
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
