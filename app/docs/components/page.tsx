import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { docsComponentNavItems } from "@/app/docs/menu";
import { SidebarNavItem } from "@/components/docs/layouts";
import { routes } from "@/lib/docs";

const groupComponentSections = () => {
    const grouped: SidebarNavItem[] = [];
    let currentSection: SidebarNavItem | null = null;
    let sectionItems: SidebarNavItem[] = [];

    for (const navItem of docsComponentNavItems) {
        if (navItem.isLabel) {
            if (currentSection) {
                grouped.push({ ...currentSection, items: sectionItems });
            }
            currentSection = navItem;
            sectionItems = [];
        } else {
            sectionItems.push(navItem);
        }
    }

    if (currentSection) {
        grouped.push({ ...currentSection, items: sectionItems });
    }

    return grouped;
};

const ComponentPage = () => {
    return (
        <div className="min-h-[80vh] px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 rounded-full border px-3 py-0.5 text-sm font-medium">
                    <div className="bg-primary size-1.5 rounded-full"></div>
                    Stable
                </div>
                <p className="from-foreground to-foreground/65 mt-2 w-fit bg-linear-to-r bg-clip-text text-3xl font-[650] tracking-tight text-transparent lg:text-4xl 2xl:text-5xl">
                    Components
                </p>
                <p className="text-muted-foreground mt-1 max-w-xl text-center max-sm:text-sm">
                    Beautiful, animated components that respond smoothly, feel natural, and elevate user experience.
                </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:mt-12 xl:gap-8">
                {groupComponentSections().map((item, index) => (
                    <div key={index} className="group/section overflow-hidden rounded-md border">
                        <div className="bg-muted/60 group-hover/section:bg-muted px-5 py-2 font-medium">
                            {item.title}
                        </div>
                        <div className="space-y-0.5 px-5 py-3">
                            {item.items?.map((item, index) => (
                                <Link
                                    href={item.href ?? ""}
                                    key={index}
                                    className="group text-foreground/80 hover:text-foreground flex items-center justify-between transition-all hover:underline">
                                    <p>{item.title}</p>
                                    <ArrowRightIcon className="size-4.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
                <Link
                    href={routes.external.twitter}
                    target="_blank"
                    className="hover:bg-muted flex flex-col items-center justify-center rounded-md border border-dashed p-5 transition-all">
                    <p className="text-lg/none font-medium">New stuff on the way</p>
                    <p className="text-muted-foreground mt-0.5 text-sm italic">Keep in touch with what’s next!</p>
                </Link>
            </div>
        </div>
    );
};

export default ComponentPage;
