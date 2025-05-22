import { ImageIcon } from "lucide-react";

import { RevealText } from "@/components/gsap/reveal-text";
import { TiltCard } from "@/components/gsap/tilt-card";
import { Badge } from "@/components/ui/badge";

export const Demo = () => {
    return (
        <div className="bg-background overflow-hidden p-4 sm:p-6 lg:p-12">
            <div className="grid h-full grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="order-2 flex flex-col items-start lg:order-1">
                    <Badge variant="outline" className="font-medium">
                        Initial Release
                    </Badge>
                    <RevealText className="mt-2 text-xl font-medium lg:text-3xl">
                        Smarter Workflows, Faster Results
                    </RevealText>
                    <p className="text-muted-foreground mt-1">
                        An intuitive platform that helps you write, organize, and automate daily tasks. So you can focus
                        on what matters.
                    </p>
                    <div className="text-muted-foreground mt-auto pt-3 italic">
                        - Built for teams, creators, and product folks
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <TiltCard className="bg-foreground/5 flex h-80 flex-col items-center justify-center gap-3 rounded-md">
                        <ImageIcon className="size-12 opacity-10" />
                        <p className="opacity-30">Hero Image</p>
                    </TiltCard>
                </div>
            </div>
        </div>
    );
};
