import { ReactNode } from "react";

import { routes } from "@/lib/docs";

const blocks = routes.blocks.base;

type IBlockSidebarNavItem = {
    title: string;
    items: number;
    href: string;
    demo: ReactNode;
};

export const blocksSidebarNavItems: IBlockSidebarNavItem[] = [
    {
        title: "Hero Sections",
        items: 2,
        href: blocks + "/hero",
        demo: (
            <div className="grid h-full grid-cols-2 p-6">
                <div className="flex flex-col">
                    <div className="bg-foreground/10 h-1.5 w-[20%] rounded"></div>
                    <div className="bg-foreground/15 mt-1 h-3 w-[80%] rounded"></div>
                    <div className="bg-foreground/10 mt-2 h-8 w-[80%] rounded"></div>
                    <div className="bg-foreground/10 mt-auto h-4 w-[60%] rounded"></div>
                </div>
                <div>
                    <div className="from-foreground/5 to-foreground/10 h-full w-full rounded bg-linear-to-r"></div>
                </div>
            </div>
        ),
    },
    {
        title: "Pricing Sections",
        items: 1,
        href: blocks + "/pricing",
        demo: (
            <div className="grid h-full grid-cols-3 gap-4 p-6">
                <div className="bg-foreground/5 flex flex-col items-center rounded p-3">
                    <div className="bg-foreground/10 h-1.5 w-[20%] rounded"></div>
                    <div className="bg-foreground/15 mt-1 h-3 w-[80%] rounded"></div>
                    <div className="bg-foreground/5 mt-2 h-8 w-[80%] rounded"></div>
                    <div className="bg-foreground/10 mt-auto h-4 w-[60%] rounded"></div>
                </div>
                <div className="bg-foreground/5 flex flex-col items-center rounded p-2">
                    <div className="bg-foreground/10 h-1.5 w-[20%] rounded"></div>
                    <div className="bg-foreground/15 mt-1 h-3 w-[80%] rounded"></div>
                    <div className="bg-foreground/5 mt-2 h-10 w-[80%] rounded"></div>
                    <div className="bg-foreground/10 mx-auto mt-auto h-4 w-[60%] rounded"></div>
                </div>
                <div className="bg-foreground/5 flex flex-col items-center rounded p-2">
                    <div className="bg-foreground/10 h-1.5 w-[20%] rounded"></div>
                    <div className="bg-foreground/15 mt-1 h-3 w-[80%] rounded"></div>
                    <div className="bg-foreground/5 mt-2 h-12 w-[80%] rounded"></div>
                    <div className="bg-foreground/10 mx-auto mt-auto h-4 w-[60%] rounded"></div>
                </div>
            </div>
        ),
    },
];
