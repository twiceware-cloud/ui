import { BookOpenTextIcon, ChevronRightIcon, ShapesIcon } from "lucide-react";
import Link from "next/link";

import { Topbar } from "@/components/docs/layouts";
import { Logo } from "@/components/docs/logo";
import { Newsletter } from "@/components/docs/newsletter";
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
                            <Link href="/docs/components/bouncing-text/">
                                <Badge variant="outline" color="success" className="font-medium">
                                    New: Bouncing Text
                                </Badge>
                            </Link>

                            <div className="flex items-center justify-center gap-4">
                                <Logo className="size-16" />
                                <RevealText type="chars" gsapVars={{ duration: 1, stagger: 0.2 }}>
                                    <p className="text-3xl font-semibold sm:text-7xl">PaceUI</p>
                                </RevealText>
                            </div>
                        </div>
                        <RevealText type="words" gsapVars={{ stagger: 0.08 }}>
                            <p className="text-foreground/80 mt-4 sm:text-xl">
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
