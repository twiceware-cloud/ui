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
                title: "Text Reveal",
                link: components + "/text-reveal",
            },
            {
                title: "Text Scrambler",
                link: components + "/text-scrambler",
            },
            {
                title: "Text Distorter",
                link: components + "/text-distorter",
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
