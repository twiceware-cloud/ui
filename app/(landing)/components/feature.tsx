import { ActivityIcon, LayersIcon, LucideIcon, PackageIcon, ZapIcon } from "lucide-react";

import { RevealOnScroll } from "@/components/gsap/reveal-on-scroll";

type Feature = {
    title: string;
    description: string;
    icon: LucideIcon;
};

const features: Feature[] = [
    {
        title: "Built for real interaction",
        description: "Each component adds subtle polished movement that feels purposeful not flashy",
        icon: ActivityIcon,
    },
    {
        title: "Drop in scale fast",
        description: "Install with one shadcn command and use across any project instantly",
        icon: PackageIcon,
    },
    {
        title: "Zero setup",
        description: "Text reveals bouncy titles springy buttons ready to use no configuration needed",
        icon: LayersIcon,
    },
    {
        title: "Powered by GSAP",
        description: "Built on rock-solid animation tech crafted for smooth performance",
        icon: ZapIcon,
    },
];
export const Feature = () => {
    return (
        <div className="my-16 gap-16 overflow-hidden 2xl:my-36">
            <RevealOnScroll effect="slideInRight" className="grid grid-cols-4 gap-6">
                {features.map(({ icon: Icon, description, title }, index) => (
                    <div key={index} className="rounded border p-5">
                        <div className="bg-muted inline-flex rounded p-2.5">{<Icon className="size-5.5" />}</div>
                        <p className="mt-2 text-lg font-medium">{title}</p>
                        <p className="text-foreground/80 mt-1 text-sm">{description}</p>
                    </div>
                ))}
            </RevealOnScroll>
        </div>
    );
};
