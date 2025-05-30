"use client";

import { MenuIcon, MilestoneIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ClassNameValue } from "tailwind-merge";
import { Drawer } from "vaul";

import { DiscordIcon, GithubIcon, TwitterIcon } from "@/components/docs/icon";
import { Sidebar, SidebarNavItem } from "@/components/docs/layouts";
import { Logo } from "@/components/docs/logo";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/docs";
import { cn } from "@/lib/utils";

import { ThemeModeToggle } from "../theme-mode-toggle";

type TopbarProps = {
    menuItems?: SidebarNavItem[];
    className?: ClassNameValue;
    showLogo?: boolean;
};

export const Topbar = ({ menuItems = [], className, showLogo = false }: TopbarProps) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpenDrawer(false);
    }, [pathname]);

    const items: SidebarNavItem[] = [
        {
            title: "Navigation",
            icon: <MilestoneIcon />,
            expanded: true,
            items: [
                {
                    title: "Components",
                    href: routes.docs.components.home,
                },
                {
                    title: "Blocks",
                    href: routes.blocks.base,
                },
            ],
        },
        ...menuItems,
    ];

    return (
        <div className={cn("flex h-full items-center justify-between", className)}>
            <div className="flex items-center gap-2 md:gap-8">
                <Drawer.Root direction="left" open={openDrawer} onOpenChange={setOpenDrawer}>
                    <Drawer.Trigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="cursor-pointer md:hidden"
                            aria-label="Leftmenu toggle">
                            <MenuIcon className="!size-5" />
                        </Button>
                    </Drawer.Trigger>
                    <Drawer.Portal>
                        <Drawer.Overlay className="fixed inset-0 z-10 bg-black/40" />
                        <Drawer.Content className="fixed start-2 top-2 bottom-2 z-10 outline-none">
                            <Drawer.Title hidden>Hidden</Drawer.Title>
                            <Sidebar items={items} className="bg-background w-64 rounded" />
                        </Drawer.Content>
                    </Drawer.Portal>
                </Drawer.Root>
                {showLogo && (
                    <Link href={routes.landing} className="max-md:hidden">
                        <Logo />
                    </Link>
                )}
                <div className="hidden gap-2 md:inline-flex md:gap-6">
                    <Link
                        className={cn("text-foreground/80 hover:text-foreground text-[15px] transition-all", {
                            "text-foreground font-medium": pathname.includes("docs"),
                        })}
                        href={routes.docs.components.home}>
                        Components
                    </Link>
                    <Link
                        className={cn(
                            "text-foreground/80 hover:text-foreground flex items-center gap-1.5 text-[15px] transition-all",
                            {
                                "text-foreground font-medium": pathname.includes("blocks"),
                            },
                        )}
                        href={routes.blocks.base}>
                        Blocks
                        <div className="bg-secondary text-secondary-foreground rounded-full px-1.5 py-0.5 text-xs/none font-medium shadow-xs">
                            New
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex items-center">
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

                <ThemeModeToggle />
            </div>
        </div>
    );
};
