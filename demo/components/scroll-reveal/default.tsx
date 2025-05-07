import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

import { ScrollReveal } from "@/components/gsap/scroll-reveal";

export const Demo = ({ ...props }) => {
    return (
        <div className="w-full">
            <div className="text-muted-foreground flex h-120 items-center justify-center gap-2">
                <p>Scroll Down </p>
                <ArrowDownIcon className="h-4" />
            </div>
            <ScrollReveal {...props}>
                <div className="flex justify-center gap-8 max-sm:flex-col">
                    <img
                        src="https://images.unsplash.com/photo-1532456745301-b2c645d8b80d"
                        className="h-80 min-w-80 rounded object-cover"
                        alt="Image"
                    />
                    <div className="flex flex-col">
                        <p className="text-muted-foreground font-mono text-xs font-medium tracking-wider uppercase">
                            Scroll Trigger
                        </p>
                        <p className="text-xl font-medium">ScrollReveal Component</p>
                        <p className="mt-2 text-sm">
                            A reusable wrapper that animates its children into view when they enter the viewport.
                            Supports multiple reveal types like fade, slide, zoom, and blur — all triggered by scroll
                            direction.
                        </p>
                        <p className="mt-auto pt-3 text-sm italic">Follow us on X</p>
                    </div>
                </div>
            </ScrollReveal>
            <div className="text-muted-foreground flex h-120 items-center justify-center gap-2">
                <p>Scroll Up </p>
                <ArrowUpIcon className="h-4" />
            </div>
        </div>
    );
};
