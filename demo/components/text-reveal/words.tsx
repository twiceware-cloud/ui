import { TextReveal } from "@/components/gsap/text-reveal";

export const Demo = () => {
    return (
        <TextReveal type="words">
            <p className="text-3xl font-medium">Animate your text with style</p>
            <p className="text-center text-sm">Smooth, expressive transitions for any part of your content</p>
        </TextReveal>
    );
};
