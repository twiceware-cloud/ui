import { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { blockSections } from "./menu";

export const metadata: Metadata = {
    title: "Blocks",
    description:
        "Beautiful, interactive, and production-ready sections you can drop into your project with a single shadcn command.",
};

export default async function Page() {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 rounded-full border px-3 py-0.5 text-sm font-medium">
                    <div className="size-1.5 rounded-full bg-green-500"></div>
                    Live
                </div>
                <p className="from-foreground to-foreground/60 mt-2 w-fit bg-linear-to-r bg-clip-text text-3xl font-[650] tracking-tight text-transparent lg:text-4xl 2xl:text-5xl">
                    Blocks
                </p>
                <p className="text-muted-foreground mt-1 max-w-xl text-center max-sm:text-sm">
                    Beautiful, interactive, and production-ready sections you can drop into your project with a single
                    shadcn command.
                </p>
            </div>
            <div className="mt-8 sm:mt-12 xl:mt-16">
                {blockSections.map((block, index) => (
                    <div key={index} className="mt-4 lg:mt-8">
                        <p className="text-lg font-medium">{block.title}</p>
                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                            {block.items.map((item, index) => (
                                <Link href={item.href} key={index}>
                                    <Card className="group relative overflow-hidden rounded border shadow-none">
                                        <div className="bg-foreground/3 h-50 opacity-60 grayscale-100 transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                                            {item.demo}
                                        </div>
                                        {item.badge && (
                                            <div className="bg-muted text-muted-foreground absolute end-2 top-2 rounded px-1.5 py-0.5 text-xs font-medium shadow-sm">
                                                {item.badge == "new" && <p>New</p>}
                                            </div>
                                        )}
                                        <p className="p-4">{item.title}</p>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 border-t border-dashed sm:mt-6 xl:mt-8"></div>
            <div>
                <p className="mt-4 text-lg font-medium">More Blocks</p>
                <Link href="/" className="mt-4 block max-w-88">
                    <Card className="overflow-hidden rounded border shadow-none">
                        <div className="bg-foreground/3 relative h-44">
                            <Badge className="absolute start-3 top-3">In Development</Badge>
                            <div className="flex h-full items-center justify-center gap-4 opacity-60 transition-all duration-300 hover:opacity-100">
                                <div className="border-b-foreground/15 h-0 w-0 border-r-20 border-b-30 border-l-20 border-transparent"></div>
                                <div className="bg-foreground/15 size-8"></div>
                                <div className="bg-foreground/15 size-9 rounded-full"></div>
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-lg/none font-medium">New stuff on the way</p>
                            <p className="text-muted-foreground mt-0.5 text-sm italic">
                                Keep in touch with what’s next!
                            </p>
                        </div>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
