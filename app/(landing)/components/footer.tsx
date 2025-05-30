"use client";

import Link from "next/link";
import { ClassNameValue } from "tailwind-merge";

import { DiscordIcon, GithubIcon, TwitterIcon } from "@/components/docs/icon";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/docs";
import { cn } from "@/lib/utils";

type FooterProps = {
    className?: ClassNameValue;
};

export const Footer = ({ className }: FooterProps) => {
    return (
        <div
            className={cn("flex flex-wrap items-center justify-between py-3 max-sm:justify-center md:py-4", className)}>
            <p className="max-sm:text-center max-sm:text-sm">
                The source code is available on{" "}
                <Link className="hover:underline" href={routes.externalLinks.github} target="_blank">
                    GitHub
                </Link>
                .
            </p>
            <div className="flex items-center gap-0.5">
                <Button variant={"ghost"} size="icon" asChild aria-label="Github">
                    <Link href={routes.externalLinks.twitter} target="_blank">
                        <TwitterIcon className="!size-4" />
                    </Link>
                </Button>
                <Button variant={"ghost"} size="icon" asChild aria-label="Github">
                    <Link href={routes.externalLinks.discord} target="_blank">
                        <DiscordIcon className="!size-5" />
                    </Link>
                </Button>
                <Button variant={"ghost"} size="icon" asChild aria-label="Github">
                    <Link href={routes.externalLinks.github} target="_blank">
                        <GithubIcon className="!size-4.5" />
                    </Link>
                </Button>
            </div>
        </div>
    );
};
