"use client";

import { useEffect, useMemo, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchFile } from "@/lib/docs";

import { ClientDemoComponent } from "./client-demo-component";
import { CodePreview } from "./code-preview";
import { DemoPreview, IDemoPreview } from "./demo-preview";

type IDemoCodePreview = {
    path: string;
    props: IDemoPreview["props"];
};

export const DemoCodePreview = ({ path, props }: IDemoCodePreview) => {
    const [code, setCode] = useState<string | undefined>(undefined);

    useEffect(() => {
        fetchFile(path).then(setCode);
    }, [path]);

    const DemoComponent = useMemo(() => ClientDemoComponent(path), [path]);

    return (
        <Tabs defaultValue="preview" className="mt-3">
            <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="mt-4">
                <DemoPreview component={DemoComponent} props={props} />
            </TabsContent>
            <TabsContent value="code" className="mt-4">
                <CodePreview code={code} removeExtraProps />
            </TabsContent>
        </Tabs>
    );
};
