import { BookOpenTextIcon, MilestoneIcon, ShapesIcon, SquareDashedBottomCodeIcon } from "lucide-react";

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
                title: "Reveal on Scroll",
                link: components + "/reveal-on-scroll",
            },
            {
                title: "Bouncing Text",
                link: components + "/bouncing-text",
            },
            {
                title: "Mouse Wave Text",
                link: components + "/mouse-wave-text",
                new: true,
            },
            {
                title: "Squash Text",
                link: components + "/squash-text",
                new: true,
            },
            {
                title: "Stagger on Scroll",
                link: components + "/stagger-on-scroll",
            },
            {
                title: "Draw Line Text",
                link: components + "/draw-line-text",
                new: true,
            },
            {
                title: "Text Fall Button",
                link: components + "/text-fall-button",
                new: true,
            },
        ],
    },
    {
        title: "Coming soon",
        icon: <MilestoneIcon />,
        comingSoon: true,
        items: [
            {
                title: "Scroll Trigger",
            },
            {
                title: "Scroll Smoother",
            },
            {
                title: "Draggable",
            },
        ],
    },
];
