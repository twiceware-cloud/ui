import { TextReveal } from "@/components/gsap/text-reveal";

export const Demo = () => {
    return (
        <TextReveal type="lines" splitTextVars={{ mask: "lines" }}>
            <p className="text-center text-2xl font-medium">Watch creativity unfold, line by line</p>
            <p className="text-center text-xl">Each line is hidden, waiting to be revealed</p>
            <p className="text-center text-lg">Experience text coming to life with a masked animation</p>
        </TextReveal>
    );
};
