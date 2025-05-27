import { PlayCircleIcon, ZapIcon } from "lucide-react";

import { RevealText } from "@/components/gsap/reveal-text";
import { SpringButton } from "@/components/gsap/spring-button";
import { TextFallButton } from "@/components/gsap/text-fall-button";
import { TiltCard } from "@/components/gsap/tilt-card";

export const Demo = () => {
    return (
        <div className="container overflow-hidden p-6 sm:p-12 lg:p-24">
            <div className="grid h-full grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="order-2 flex flex-col items-start lg:order-1">
                    <div className="bg-muted flex items-center gap-1.5 rounded-full py-1 ps-1 pe-3 text-sm">
                        <div className="bg-primary text-primary-foreground rounded-full p-1">
                            <ZapIcon className="size-4" />
                        </div>
                        <p>Built for everyday speed</p>
                    </div>

                    <RevealText className="mt-3 text-2xl leading-[1.25] font-semibold sm:text-3xl lg:text-4xl">
                        Smarter Workflows. Faster Results. Better Clarity.
                    </RevealText>
                    <p className="text-foreground/80 mt-5 max-w-lg">
                        Plan and write faster with simple, focused tools built for action, growth, and everyday creative
                        momentum across all your important projects.
                    </p>
                    <div className="mt-auto flex items-center gap-3 pt-6">
                        <TextFallButton className="bg-primary text-primary-foreground cursor-pointer rounded-full py-2 ps-4 pe-5 font-medium">
                            Start Free Trial
                        </TextFallButton>
                        <SpringButton
                            shaking={false}
                            className="flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 font-medium shadow-none">
                            Watch Demo
                            <PlayCircleIcon className="size-4.5" />
                        </SpringButton>
                    </div>
                    <div className="mt-auto flex items-center gap-2 pt-6">
                        <div className="flex -space-x-4 *:transition-all *:duration-300 *:hover:-translate-y-2">
                            <img
                                src="/images/avatars/1.jpg"
                                alt="Avatar"
                                className="border-background size-12 rounded-full border-4"
                            />
                            <img
                                src="/images/avatars/2.jpg"
                                alt="Avatar"
                                className="border-background size-12 rounded-full border-4"
                            />
                            <img
                                src="/images/avatars/3.jpg"
                                alt="Avatar"
                                className="border-background size-12 rounded-full border-4"
                            />
                        </div>
                        <div>
                            <p className="font-medium">12k+</p>
                            <p className="text-muted-foreground text-sm leading-none">
                                Trusted by teams and businesses
                            </p>
                        </div>
                    </div>
                </div>

                <TiltCard wrapperClassName="order-1 lg:order-2" className="bg-foreground/5 rounded-md p-2">
                    <img
                        src="https://images.unsplash.com/photo-1674027392842-29f8354e236c?w=1000"
                        className="h-80 w-full rounded-md object-cover sm:h-90 lg:h-100"
                        alt="Hero Image"
                    />
                </TiltCard>
            </div>
        </div>
    );
};
