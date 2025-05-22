"use client";

import { FullscreenIcon, LaptopIcon, MonitorIcon, RotateCcwIcon, SmartphoneIcon } from "lucide-react";
import React, { useMemo, useRef, useState } from "react";

import { CodePreview } from "@/components/docs/mdx/code-preview";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export type IBlockPreview = {
    path?: string;
    smHeight?: number;
    mdHeight?: number;
    lgHeight?: number;
};

export const BlockPreview = ({ path, smHeight, mdHeight, lgHeight }: IBlockPreview) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const [device, setDevice] = useState<"sm" | "md" | "lg">("lg");
    const [mode, setMode] = useState<"preview" | "code">("preview");

    const minHeight = useMemo(() => {
        const lg = lgHeight ?? 200;
        const md = mdHeight ?? lg;
        const sm = smHeight ?? md;
        return { lg, md, sm }[device];
    }, [device, lgHeight, mdHeight, smHeight]);

    const openPreview = () => {
        window.open(`/examples/${path}`, "_blank");
    };

    const refreshIframe = () => {
        if (iframeRef.current) {
            iframeRef.current.src = iframeRef.current.src ?? "";
        }
    };

    return (
        <div className="mt-3">
            <div className="flex items-center justify-between">
                <Tabs value={mode} onValueChange={(e) => setMode(e as typeof mode)}>
                    <TabsList>
                        <TabsTrigger value="preview" className="cursor-pointer">
                            Preview
                        </TabsTrigger>
                        <TabsTrigger value="code" className="cursor-pointer">
                            Code
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <TooltipProvider>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5 rounded-md border p-0.5">
                            <Tooltip>
                                <TooltipTrigger className="cursor-pointer" asChild>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className={cn("size-8 cursor-pointer", { "bg-muted": device === "sm" })}
                                        onClick={() => setDevice("sm")}>
                                        <SmartphoneIcon className="!size-4.5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Mobile</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger className="cursor-pointer" asChild>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className={cn("size-8 cursor-pointer", { "bg-muted": device === "md" })}
                                        onClick={() => setDevice("md")}>
                                        <LaptopIcon className="!size-4.5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Laptop</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger className="cursor-pointer" asChild>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className={cn("size-8 cursor-pointer", { "bg-muted": device === "lg" })}
                                        onClick={() => setDevice("lg")}>
                                        <MonitorIcon className="!size-4.5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Desktop</TooltipContent>
                            </Tooltip>
                        </div>
                        <div className="gap-1 rounded-md border p-0.5">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="size-8 cursor-pointer"
                                        onClick={openPreview}>
                                        <FullscreenIcon className="!size-4.5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Full Screen</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="size-8 cursor-pointer"
                                        onClick={refreshIframe}>
                                        <RotateCcwIcon className="!size-4.5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Refresh</TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                </TooltipProvider>
            </div>
            {mode == "preview" && (
                <div className="relative mt-3 overflow-hidden rounded-md border">
                    <div className="absolute inset-0 -z-1 bg-[url('/images/docs/dots-bg.png')] bg-[length:800px_300px] bg-repeat opacity-5 dark:opacity-6" />
                    <div className="flex justify-center">
                        <div
                            className="group w-full shadow data-[device=md]:w-4xl data-[device=sm]:w-md"
                            data-device={device}>
                            <iframe
                                ref={iframeRef}
                                className="h-full w-full"
                                style={{
                                    minHeight: minHeight + "px",
                                }}
                                src={`/examples/${path}`}></iframe>
                        </div>
                    </div>
                </div>
            )}
            {mode == "code" && <CodePreview path={path} className="mt-3" collapsible />}
        </div>
    );
};
