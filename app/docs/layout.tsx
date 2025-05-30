import React from "react";

import { Footer, Sidebar, Topbar } from "@/components/docs/layouts";

import { docsSidebarNavItems } from "./menu";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container-wrapper flex border-dashed md:border-e">
            <div className="sticky top-0 hidden h-screen min-w-60 md:block xl:min-w-64">
                <Sidebar items={docsSidebarNavItems} className="border-s border-e border-dashed" />
            </div>
            <div className="min-w-0 grow">
                <div className="bg-background/90 sticky top-0 z-10 h-16 border-b border-dashed backdrop-blur-md">
                    <div className="h-full pe-4 max-xl:px-6 max-sm:px-4 xl:ps-8 2xl:ps-12">
                        <Topbar menuItems={docsSidebarNavItems} />
                    </div>
                </div>

                <div className="my-4 xl:my-8 2xl:my-12">{children}</div>
                <div className="border-t border-dashed">
                    <Footer className="pe-4 max-xl:px-6 max-sm:px-4 xl:ps-8 2xl:ps-12" />
                </div>
            </div>
        </div>
    );
}
