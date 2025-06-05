'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import type { ClassNameValue } from 'tailwind-merge'
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react'
import { Logo } from '@/components/docs/logo'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { routes } from '@/lib/docs'
import { cn } from '@/lib/utils'

export type SidebarNavItem = {
  icon?: IconSvgElement
  title: string
  items?: SidebarNavItem[]
  href?: string
  expanded?: boolean
  new?: boolean
  comingSoon?: boolean
  isLabel?: boolean
}

type SidebarProps = {
  items: SidebarNavItem[]
  className?: ClassNameValue
}

export const Sidebar = ({ items, className }: SidebarProps) => {
  const pathname = usePathname()

  const getOpenMenuKeys = useCallback(() => {
    return items
      .filter(item => {
        if (!item.expanded) {
          return item.items?.find(item => item.href === pathname)
        }
        return item.expanded
      })
      .map(s => s.title)
  }, [items, pathname])

  const [menuKeys, setMenuKeys] = useState<string[]>(getOpenMenuKeys())

  useEffect(() => {
    setMenuKeys(menuKeys => [...new Set<string>([...menuKeys, ...getOpenMenuKeys()])])
  }, [pathname, items, getOpenMenuKeys])

  return (
    <div className={cn('flex h-full flex-col', className)}>
      <Link
        href={routes.landing}
        className="flex min-h-16 items-center gap-1.5 border-b border-dashed px-5"
      >
        <Logo className="size-6" /> <span className="font-medium">twc-ui</span>
      </Link>
      <ScrollArea className="relative min-h-0 grow px-5">
        <Accordion
          type="multiple"
          value={menuKeys}
          onValueChange={setMenuKeys}
          className="group/arrow space-y-1.5 pt-3 pb-6"
        >
          {items.map((item, key) => (
            <SidebarNavItem key={key} item={item} pathname={pathname} index={key} />
          ))}
        </Accordion>
        <div className="absolute top-0 h-5 w-full bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 h-5 w-full bg-gradient-to-t from-background to-transparent" />
      </ScrollArea>
    </div>
  )
}

const SidebarNavItem = ({
  item,
  pathname,
  index
}: {
  item: SidebarNavItem
  pathname: string
  index: number
}) => {
  const isActive = pathname === item.href

  if (item.isLabel) {
    return (
      <p
        className={cn('ms-4 font-medium text-muted-foreground', {
          'mt-3.5': index !== 0
        })}
      >
        {item.title}
      </p>
    )
  }

  return item.items ? (
    <AccordionItem
      value={item.title}
      className={cn('border-0', {
        'opacity-70': item.comingSoon
      })}
    >
      <AccordionTrigger className="py-2 pe-2 hover:no-underline [&>svg]:opacity-0 [&>svg]:transition-all group-hover/arrow:[&>svg]:opacity-100">
        <div className="flex grow items-center gap-1.5">
          {item.icon && <HugeiconsIcon icon={item.icon} className="size-5 text-foreground/80" />}
          {item.title}
          {item.new && <Badge className="ms-auto">New</Badge>}
        </div>
      </AccordionTrigger>
      <AccordionContent
        className={cn('mx-3 space-y-0.5 pb-0', {
          'pointer-events-none': item.comingSoon
        })}
      >
        {item.items.map((item, key) => (
          <SidebarNavItem item={item} key={key} pathname={pathname} index={key} />
        ))}
      </AccordionContent>
    </AccordionItem>
  ) : (
    <Link
      className={cn(
        'flex h-7.5 items-center gap-2 rounded px-4 transition-all hover:bg-foreground/5',
        {
          'bg-foreground/5': isActive
        }
      )}
      href={item.href ?? '#'}
    >
      {item.icon && <HugeiconsIcon icon={item.icon} className="size-5 text-foreground/80" />}
      {item.title}
      {item.comingSoon && <Badge className="ms-auto">Coming soon</Badge>}
      {item.new && (
        <Badge variant="outline" className="ms-auto px-1 py-px font-normal">
          New
        </Badge>
      )}
    </Link>
  )
}
