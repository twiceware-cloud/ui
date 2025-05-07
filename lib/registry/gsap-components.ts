import { type RegistryItem } from "shadcn/registry";

export const gsapComponentRegistries: RegistryItem[] = [
    {
        name: "text-distorter",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/text-distorter.tsx",
                type: "registry:ui",
                target: "~/components/gsap/text-distorter.tsx",
            },
        ],
    },
    {
        name: "text-reveal",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/text-reveal.tsx",
                type: "registry:ui",
                target: "~/components/gsap/text-reveal.tsx",
            },
        ],
    },
    {
        name: "text-scrambler",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/text-scrambler.tsx",
                type: "registry:ui",
                target: "~/components/gsap/text-scrambler.tsx",
            },
        ],
    },
    {
        name: "scroll-reveal",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/scroll-reveal.tsx",
                type: "registry:ui",
                target: "~/components/gsap/scroll-reveal.tsx",
            },
        ],
    },
];
