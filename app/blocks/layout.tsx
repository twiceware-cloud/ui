import React from "react";

import { Footer, Topbar } from "@/components/docs/layouts";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container-wrapper bg-foreground/2 border-dashed md:border-x">
            <div className="bg-background border-dashed md:mx-2 md:border-x">
                <Topbar className="px-4 lg:px-8 xl:px-16 2xl:px-24" showLogo />
                <div className="px-4 py-4 sm:py-8 lg:px-8 xl:px-16 xl:py-12 2xl:px-24 2xl:py-16">{children}</div>
                <Footer className="px-4 lg:px-8 xl:px-16 2xl:px-24" />
            </div>
        </div>
    );
}
