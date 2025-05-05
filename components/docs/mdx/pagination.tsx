import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export type Pagination = {
    title: string;
    link: string;
};

export type PaginationPair = {
    next?: Pagination;
    prev?: Pagination;
};

export const DocsPagination = ({ next, prev }: PaginationPair) => {
    return (
        <div className="flex items-center justify-between">
            {prev && (
                <Button variant="outline" asChild className="h-fit px-3.5 py-2.5 shadow-none">
                    <Link href={prev.link} className="inline-flex gap-3">
                        <ChevronLeftIcon className="mr-2 size-4" />
                        <div className="text-end">
                            <p className="text-muted-foreground text-xs/none">Previous</p>
                            <p className="mt-1 text-base/none font-medium">{prev.title}</p>
                        </div>
                    </Link>
                </Button>
            )}
            {next && (
                <Button variant="outline" asChild className="ms-auto h-fit px-3.5 py-2.5 shadow-none">
                    <Link href={next.link} className="inline-flex gap-3">
                        <div className="text-start">
                            <p className="text-muted-foreground text-xs/none">Next</p>
                            <p className="mt-1 text-base/none font-medium">{next.title}</p>
                        </div>
                        <ChevronRightIcon className="ml-2 size-4" />
                    </Link>
                </Button>
            )}
        </div>
    );
};
