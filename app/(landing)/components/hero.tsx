import { BookOpenTextIcon, ChevronRightIcon, RocketIcon, ShapesIcon } from "lucide-react";
import Link from "next/link";

import { RevealText } from "@/components/gsap/reveal-text";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/docs";

export const Hero = () => {
    return (
        <div className="my-16 grid grid-cols-2 gap-16 2xl:my-32">
            <div className="flex flex-col items-start">
                <Link
                    href="/docs/components/spring-button"
                    className="bg-muted flex items-center gap-1.5 rounded-full py-1 ps-1 pe-4 text-sm">
                    <div className="bg-primary text-primary-foreground rounded-full p-1">
                        <RocketIcon className="size-4" />
                    </div>
                    <p>Huge Release</p>
                </Link>
                <p className="mt-2 leading-[1.15] font-[580] tracking-tight sm:text-[60px]">
                    Interactive{" "}
                    <span className="text-primary-foreground group relative inline">
                        animations{" "}
                        <span className="bg-primary shape-morph absolute -inset-x-2 -inset-y-1 -z-1 skew-0"></span>
                    </span>
                    shaping every experience
                </p>
                <RevealText
                    type="lines"
                    gsapVars={{ stagger: 0.35 }}
                    splitTextVars={{ mask: "lines" }}
                    className="mt-8">
                    <p className="text-foreground/90 tracking-tight sm:text-xl">
                        A <span className="font-medium">GSAP</span> collection of components and ready blocks, built for
                        dynamic animations and smooth interaction in your React projects.
                    </p>
                </RevealText>

                <div className="mt-8 flex justify-center gap-6 max-sm:flex-col">
                    <Button size="lg" asChild>
                        <Link href={routes.docs.home}>
                            <BookOpenTextIcon />
                            Documentation
                        </Link>
                    </Button>
                    <Button size="lg" variant="ghost" asChild>
                        <Link href={routes.docs.components.home}>
                            <ShapesIcon />
                            Components
                            <ChevronRightIcon />
                        </Link>
                    </Button>
                </div>
            </div>

            {/*<div className="mt-24 flex justify-center xl:mt-32 2xl:mt-48">*/}
            {/*    <Newsletter />*/}
            {/*</div>*/}
        </div>
    );
};
