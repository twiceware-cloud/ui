import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { blocksSidebarNavItems } from "./menu";

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
            <p className="text-muted-foreground mt-20">Examples</p>
            <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {blocksSidebarNavItems.map((item, index) => (
                    <Link href={item.href} key={index}>
                        <Card className="group overflow-hidden rounded border shadow-none">
                            <div className="bg-foreground/3 h-44 opacity-60 grayscale-100 transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                                {item.demo}
                            </div>
                            <div className="p-4">
                                <p className="text-lg/none font-medium">{item.title}</p>
                                <p className="text-muted-foreground text-sm">{item.items} items</p>
                            </div>
                        </Card>
                    </Link>
                ))}
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
                        <p className="text-muted-foreground text-sm italic">Stay tuned!</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
