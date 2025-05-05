import { TextReveal } from "@/components/gsap/text-reveal";

export const Demo = () => {
    return (
        <TextReveal
            gsapVars={{
                duration: 1,
                yPercent: "random([-150, 150])",
                xPercent: "random([-150, 150])",
                stagger: {
                    from: "random",
                    amount: 0.6,
                },
                ease: "power3.out",
            }}>
            <p className="text-center text-3xl font-medium">Animate your text with style</p>
            <p className="text-center text-sm">Smooth, expressive transitions for any part of your content</p>
        </TextReveal>
    );
};
