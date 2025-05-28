import { BookOpenTextIcon, ChevronRightIcon, ShapesIcon } from "lucide-react";
import Link from "next/link";

import { Topbar } from "@/components/docs/layouts";
import { LogoIcon } from "@/components/docs/logo-icon";
import { Newsletter } from "@/components/docs/newsletter";
import { DrawLineText } from "@/components/gsap/draw-line-text";
import { RevealText } from "@/components/gsap/reveal-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/docs";

export default function LandingPage() {
    return (
        <div className="container">
            <Topbar />
            <div className="mt-16 mb-16 2xl:mt-36">
                <div className="flex flex-col items-center justify-center">
                    <div className="max-w-[600px] text-center">
                        <div>
                            <Link href="/docs/components/spring-button">
                                <Badge variant="outline">Exciting updates ahead</Badge>
                            </Link>

                            <div className="mt-1 flex items-center justify-center gap-3">
                                <LogoIcon className="size-16" />
                                <div className="-mt-3">
                                    <DrawLineText
                                        className="font-medium"
                                        fontSize={72}
                                        letterSpacing={-1}
                                        color="var(--color-foreground)"
                                        oneByOne={false}
                                        strokeWidth={1.5}
                                        text="PaceUI"></DrawLineText>
                                </div>
                            </div>
                        </div>
                        <RevealText type="words" gsapVars={{ stagger: 0.08 }} className="mt-4">
                            <p className="text-foreground/80 sm:text-xl">
                                A <span className="font-semibold">GSAP</span> component for dynamic animations, ready to
                                use in your React & Next.js projects.
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
                </div>
                <div className="mt-24 flex justify-center xl:mt-32 2xl:mt-48">
                    <Newsletter />
                </div>
            </div>
        </div>
    );
}
