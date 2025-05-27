import { ImageIcon, PlayIcon } from "lucide-react";

import { RevealText } from "@/components/gsap/reveal-text";
import { SpringButton } from "@/components/gsap/spring-button";
import { TextFallButton } from "@/components/gsap/text-fall-button";
import { TiltCard } from "@/components/gsap/tilt-card";
import { Badge } from "@/components/ui/badge";

export const Demo = () => {
    return (
        <div className="overflow-hidden p-6 sm:p-12 lg:p-24">
            <div className="grid h-full grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="order-2 flex flex-col items-start lg:order-1">
                    <div className="bg-muted flex items-center gap-2 rounded-md py-0.5 ps-0.5 pe-2 text-sm">
                        <Badge variant="default" className="font-medium">
                            NEW
                        </Badge>
                        <p>Short text</p>
                    </div>

                    <RevealText className="mt-3 text-xl font-semibold lg:text-4xl">
                        Smarter Workflows, Faster Results
                    </RevealText>
                    <p className="text-muted-foreground mt-1 max-w-xl">
                        An intuitive platform that helps you write, organize, and automate daily tasks. So you can focus
                        on what matters.
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                        <TextFallButton className="bg-primary text-primary-foreground cursor-pointer rounded-full px-4 py-2 font-medium">
                            Try for Free
                        </TextFallButton>
                        <SpringButton className="flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 shadow-none">
                            <PlayIcon className="size-4.5" />
                            Demo
                        </SpringButton>
                    </div>
                    <div className="text-muted-foreground mt-auto pt-3 italic">
                        - Built for teams, creators, and product folks
                    </div>
                </div>

                <TiltCard
                    wrapperClassName="order-1 lg:order-2"
                    className="bg-foreground/5 flex h-80 flex-col items-center justify-center gap-3 rounded-md">
                    <ImageIcon className="size-12 opacity-10" />
                    <p className="opacity-30">Hero Image</p>
                </TiltCard>
            </div>
        </div>
    );
};
