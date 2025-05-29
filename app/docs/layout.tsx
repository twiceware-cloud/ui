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
                <Topbar
                    menuItems={docsSidebarNavItems}
                    className="border-b border-dashed pe-4 max-xl:px-6 max-sm:px-4 xl:ps-8 2xl:ps-12"
                />
                <div className="mt-4 max-xl:px-6 max-sm:px-4 xl:mt-8 xl:ps-8 2xl:ps-12">{children}</div>
                <Footer className="pe-4 max-xl:px-6 max-sm:px-4 xl:ps-8 2xl:ps-12" />
            </div>
        </div>
    );
}
