"use client";

import Link from "next/link";
import { ClassNameValue } from "tailwind-merge";

import { routes } from "@/lib/docs";
import { cn } from "@/lib/utils";

type FooterProps = {
    className?: ClassNameValue;
};

export const Footer = ({ className }: FooterProps) => {
    return (
        <div
            className={cn(
                "bg-background/80 dark:bg-background/90 sticky top-0 z-10 border-t border-dashed",
                className,
            )}>
            <div className="container-wrapper flex h-12 items-center max-sm:justify-center md:h-16">
                <p className="max-sm:text-center max-sm:text-sm">
                    The source code is available on{" "}
                    <Link className="hover:underline" href={routes.externalLinks.github} target="_blank">
                        GitHub
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};
