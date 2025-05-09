import { type RegistryItem } from "shadcn/registry";

export const gsapComponentRegistries: RegistryItem[] = [
    {
        name: "distort-text",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/distort-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/distort-text.tsx",
            },
        ],
    },
    {
        name: "reveal-text",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/reveal-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/reveal-text.tsx",
            },
        ],
    },
    {
        name: "scramble-text",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/scramble-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/scramble-text.tsx",
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
    {
        name: "bouncing-text",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/bouncing-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/bouncing-text.tsx",
            },
        ],
    },
];
