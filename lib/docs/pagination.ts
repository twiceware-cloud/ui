import type { SidebarNavItem } from '@/components/docs/layouts/sidebar'
import type { PaginationPair } from '@/components/docs/mdx/pagination'

export const createPaginationPair = ({
  items,
  activePath,
  pagerPair,
  defaultPagerPair
}: {
  items: SidebarNavItem[]
  activePath: string
  pagerPair: PaginationPair
  defaultPagerPair?: PaginationPair
}): PaginationPair => {
  const flatSections = items
    .flatMap(item => (item.comingSoon ? [] : item.items))
    .filter(e => e != undefined)

  const currentIndex = flatSections.findIndex(item => item.href?.includes(activePath))

  if (currentIndex === -1) return pagerPair

  if (pagerPair.prev == null) {
    let prev = flatSections[currentIndex - 1]
    if (prev?.isLabel) {
      prev = flatSections[currentIndex - 2]
    }
    if (prev) {
      pagerPair.prev = {
        title: prev.title,
        href: prev.href ?? '#'
      }
    } else {
      pagerPair.prev = defaultPagerPair?.prev
    }
  }

  if (pagerPair.next == null) {
    let next = flatSections[currentIndex + 1]
    if (next?.isLabel) {
      next = flatSections[currentIndex + 2]
    }
    if (next) {
      pagerPair.next = {
        title: next.title,
        href: next.href ?? '#'
      }
    } else {
      pagerPair.next = defaultPagerPair?.next
    }
  }

  return pagerPair
}
