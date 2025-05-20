import { TiltCard } from "@/components/gsap/tilt-card";

export const Demo = () => {
    return (
        <TiltCard className="rounded bg-black p-24 xl:p-36" highlightClass="bg-white/15">
            <h2 className="text-white">Hover Me</h2>
        </TiltCard>
    );
};
