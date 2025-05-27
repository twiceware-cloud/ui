import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { blockSections } from "./menu";

export default async function Page() {
    return (
        <div className="">
            <div className="mt-12 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-semibold">Blocks</h1>
                <p className="text-muted-foreground mt-1 w-xl text-center">
                    Beautiful, responsive, and production ready sections you can instantly add to your React project
                    with one shadcn command.
                </p>
            </div>
            <div className="mt-16">
                {blockSections.map((block, index) => (
                    <div key={index} className="mt-8">
                        <p className="text-lg font-medium">{block.title}</p>
                        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
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
            <div className="my-16 flex items-center justify-center border-t border-dashed">
                <Link href="/" className="mt-8 max-w-88 grow">
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
