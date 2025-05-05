import { SidebarNavItem } from "@/components/docs/layouts/sidebar";
import { PaginationPair } from "@/components/docs/mdx/pagination";

export const createPaginationPair = ({
    items,
    activePath,
    pagerPair,
    defaultPagerPair,
}: {
    items: SidebarNavItem[];
    activePath: string;
    pagerPair: PaginationPair;
    defaultPagerPair?: PaginationPair;
}): PaginationPair => {
    const flatSections = items.flatMap((item) => (item.comingSoon ? [] : item.items)).filter((e) => e != undefined);

    const currentIndex = flatSections.findIndex((item) => item.link?.includes(activePath));

    if (currentIndex === -1) return pagerPair;

    if (pagerPair.prev == null) {
        if (currentIndex > 0) {
            pagerPair.prev = {
                title: flatSections[currentIndex - 1].title,
                link: flatSections[currentIndex - 1].link ?? "#",
            };
        } else {
            pagerPair.prev = defaultPagerPair?.prev;
        }
    }

    if (pagerPair.next == null) {
        if (currentIndex < flatSections.length - 1) {
            pagerPair.next = {
                title: flatSections[currentIndex + 1].title,
                link: flatSections[currentIndex + 1].link ?? "#",
            };
        } else {
            pagerPair.next = defaultPagerPair?.next;
        }
    }

    return pagerPair;
};
