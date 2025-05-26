import { type RegistryItem } from "shadcn/registry";

export const blockRegistries: RegistryItem[] = [
    {
        name: "hero-1",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["https://paceui.com/r/gsap/reveal-text", "https://paceui.com/r/gsap/tilt-card", "badge"],
        files: [
            {
                path: "hero/hero-1.tsx",
                type: "registry:block",
                target: "~/blocks/hero-1.tsx",
            },
        ],
    },
    {
        name: "hero-2",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["https://paceui.com/r/gsap/reveal-text", "https://paceui.com/r/gsap/tilt-card", "badge"],
        files: [
            {
                path: "hero/hero-2.tsx",
                type: "registry:block",
                target: "~/blocks/hero-2.tsx",
            },
        ],
    },
];
