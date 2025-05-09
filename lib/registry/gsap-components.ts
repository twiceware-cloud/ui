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
        name: "reveal-on-scroll",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/reveal-on-scroll.tsx",
                type: "registry:ui",
                target: "~/components/gsap/reveal-on-scroll.tsx",
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
    {
        name: "mouse-wave-text",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/mouse-wave-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/mouse-wave-text.tsx",
            },
        ],
    },
];
