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
                link: base.home,
            },
            {
                title: "Installation",
                link: base.installation,
            },
        ],
    },
    {
        title: "Installation",
        icon: <SquareDashedBottomCodeIcon />,
        items: [
            {
                title: "Next.js",
                link: base.installation + "/next",
            },
            {
                title: "Vite",
                link: base.installation + "/vite",
            },
            {
                title: "Manual",
                link: base.installation + "/manual",
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
                link: components + "/reveal-text",
            },
            {
                title: "Scramble Text",
                link: components + "/scramble-text",
            },
            {
                title: "Distort Text",
                link: components + "/distort-text",
            },
            {
                title: "Squash Text",
                link: components + "/squash-text",
            },
            {
                title: "Bouncing Text",
                link: components + "/bouncing-text",
            },
            {
                title: "Scroll based",
                isLabel: true,
            },
            {
                title: "Mouse Wave Text",
                link: components + "/mouse-wave-text",
            },
            {
                title: "Reveal on Scroll",
                link: components + "/reveal-on-scroll",
            },
            {
                title: "Stagger on Scroll",
                link: components + "/stagger-on-scroll",
            },
            {
                title: "Button",
                isLabel: true,
            },
            {
                title: "Text Fall Button",
                link: components + "/text-fall-button",
            },
            {
                title: "Spring Button",
                link: components + "/spring-button",
                new: true,
            },
            {
                title: "Other",
                isLabel: true,
            },
            {
                title: "Draw Line Text",
                link: components + "/draw-line-text",
            },
            {
                title: "Tilt Card",
                link: components + "/tilt-card",
            },
            {
                title: "Flip Reveal",
                link: components + "/flip-reveal",
                new: true,
            },
        ],
    },
];
