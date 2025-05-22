import { ImageIcon } from "lucide-react";

import { RevealText } from "@/components/gsap/reveal-text";
import { TiltCard } from "@/components/gsap/tilt-card";
import { Badge } from "@/components/ui/badge";

export const Demo = () => {
    return (
        <div className="bg-background container overflow-hidden py-8 sm:py-12 lg:py-20">
            <div className="flex flex-col items-center">
                <Badge variant="outline" className="font-medium">
                    Initial Release
                </Badge>
                <RevealText className="mt-2 text-xl font-medium lg:text-3xl">
                    Smarter Workflows, Faster Results
                </RevealText>
                <p className="text-muted-foreground mt-1 max-w-xl text-center">
                    An intuitive platform that helps you write, organize, and automate daily tasks. So you can focus on
                    what matters.
                </p>
                <div className="text-muted-foreground mt-6 italic sm:mt-8 lg:mt-12">
                    - Built for teams, creators, and product folks
                </div>
            </div>
            <div className="mt-4 flex justify-center sm:mt-8 lg:mt-12">
                <TiltCard>
                    <div className="bg-foreground/5 flex h-80 w-full max-w-3xl flex-col items-center justify-center gap-3 rounded-md sm:h-90 lg:h-100">
                        <ImageIcon className="size-12 opacity-10" />
                        <p className="opacity-30">Hero Image</p>
                    </div>
                </TiltCard>
            </div>
        </div>
    );
};
