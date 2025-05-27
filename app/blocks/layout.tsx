import React from "react";

import { Topbar } from "@/components/docs/layouts";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container">
            <Topbar />
            <div className="flex">
                <div className="min-w-0 grow">{children}</div>
            </div>
        </div>
    );
}
