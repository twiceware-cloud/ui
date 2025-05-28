import { BookOpenTextIcon, ShapesIcon, SquareDashedBottomCodeIcon } from "lucide-react";

import { SidebarNavItem } from "@/components/docs/layouts";
import { routes } from "@/lib/docs";

const base = routes.docs;

const components = base.components.base;

export const docsSidebarNavItems: SidebarNavItem[] = [
    {
        title: "Getting Started",
        icon: <BookOpenTextIcon />,
        expanded: true,
        items: [
            {
                title: "Introduction",
                href: base.home,
            },
            {
                title: "Installation",
                href: base.installation,
            },
        ],
    },
    {
        title: "Installation",
        icon: <SquareDashedBottomCodeIcon />,
        items: [
            {
                title: "Next.js",
                href: base.installation + "/next",
            },
            {
                title: "Vite",
                href: base.installation + "/vite",
            },
            {
                title: "Manual",
                href: base.installation + "/manual",
            },
        ],
    },
    {
        title: "Components",
        icon: <ShapesIcon />,
        expanded: true,
        items: [
            {
                title: "Text based",
                isLabel: true,
            },
            {
                title: "Reveal Text",
                href: components + "/reveal-text",
            },
            {
                title: "Scramble Text",
                href: components + "/scramble-text",
            },
            {
                title: "Distort Text",
                href: components + "/distort-text",
            },
            {
                title: "Squash Text",
                href: components + "/squash-text",
            },
            {
                title: "Bouncing Text",
                href: components + "/bouncing-text",
            },
            {
                title: "Scroll based",
                isLabel: true,
            },
            {
                title: "Mouse Wave Text",
                href: components + "/mouse-wave-text",
            },
            {
                title: "Reveal on Scroll",
                href: components + "/reveal-on-scroll",
            },
            {
                title: "Stagger on Scroll",
                href: components + "/stagger-on-scroll",
            },
            {
                title: "Button",
                isLabel: true,
            },
            {
                title: "Text Fall Button",
                href: components + "/text-fall-button",
            },
            {
                title: "Spring Button",
                href: components + "/spring-button",
                new: true,
            },
            {
                title: "Other",
                isLabel: true,
            },
            {
                title: "Draw Line Text",
                href: components + "/draw-line-text",
            },
            {
                title: "Tilt Card",
                href: components + "/tilt-card",
            },
            {
                title: "Flip Reveal",
                href: components + "/flip-reveal",
                new: true,
            },
        ],
    },
];
