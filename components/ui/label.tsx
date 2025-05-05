import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";

import { cn } from "@/lib/utils";

export type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root>;

export const Label = ({ className, ...props }: LabelProps) => (
    <LabelPrimitive.Root
        className={cn(
            "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            className,
        )}
        {...props}
    />
);
