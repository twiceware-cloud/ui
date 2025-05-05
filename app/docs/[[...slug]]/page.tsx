import { Link2Icon, MailIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { docs } from "@/.velite";
import { docsSidebarNavItems } from "@/app/docs/menu";
import { MDXContent } from "@/components/docs/mdx/mdx-content";
import { DocsPagination } from "@/components/docs/mdx/pagination";
import { TableOfContent } from "@/components/docs/mdx/toc";
import { BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { createPaginationPair, routes } from "@/lib/docs";

interface PageProps {
    params: Promise<{
        slug?: string[];
    }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const params = await props.params;
    const url = `docs${params.slug ? "/" : ""}${(params.slug ?? []).join("/")}`;
    const page = docs.find((doc) => doc.path === url);

    return {
        title: page?.title,
        description: page?.description,
    };
}

export default async function Page(props: PageProps) {
    const params = await props.params;
    const url = `docs${params.slug ? "/" : ""}${(params.slug ?? []).join("/")}`;
    const page = docs.find((doc) => doc.path === url);

    if (!page) {
        notFound();
    }

    const pager = createPaginationPair({
        items: docsSidebarNavItems,
        activePath: url,
        pagerPair: { prev: page.pagerPrev, next: page.pagerNext },
    });

    return (
        <div className="flex md:gap-4 xl:gap-8 2xl:gap-16">
            <div className="mx-auto w-full min-w-0 grow md:ps-4 xl:ps-8 2xl:ps-16">
                <BreadcrumbList className="sm:gap-1.5">
                    <BreadcrumbItem>
                        <Link className="text-foreground/80" href={routes.docs.home}>
                            Docs
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-foreground">{page.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
                <h1 className="mt-3 text-3xl font-semibold">{page.title}</h1>
                <h2 className="text-muted-foreground">{page.description}</h2>
                {page.links && (
                    <div className="mt-4 flex gap-2">
                        {page.links.api && (
                            <Link
                                className="bg-foreground/5 text-foreground hover:bg-foreground/10 inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-sm font-medium transition-all"
                                href={page.links.api}
                                target="_blank">
                                <Link2Icon className="size-3.5" />
                                Plugin Reference
                            </Link>
                        )}
                    </div>
                )}
                {page.code && (
                    <div className="mt-8">
                        <MDXContent code={page.code} />
                    </div>
                )}
                <div className="my-12">
                    <DocsPagination prev={pager.prev} next={pager.next} />
                </div>
            </div>
            <div className="sticky top-24 hidden max-h-[calc(100vh-100px)] w-52 xl:block">
                <TableOfContent entries={page.toc} />
                <div className="mt-4">
                    <p className="text-foreground/80 text-sm font-medium">Join us</p>
                    <div className="mt-2 space-y-1.5 text-sm">
                        <Link
                            href={routes.externalLinks.twitter}
                            target="_blank"
                            className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-all">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                            </svg>
                            Twitter
                        </Link>
                        <Link
                            href={routes.landing}
                            className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-all">
                            <MailIcon className="size-4" />
                            Subscribe
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
