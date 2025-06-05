import type { ReactNode } from 'react'

import { routes } from '@/lib/docs'

const blocks = routes.blocks.base

type IBlockSection = {
  title: string
  items: IBlockItem[]
}

type IBlockItem = {
  title: string
  href: string
  badge?: 'new'
  demo: ReactNode
}

export const blockSections: IBlockSection[] = [
  {
    title: 'Marketing',
    items: [
      {
        title: 'Hero Sections',
        badge: 'new',
        href: blocks + '/hero',
        demo: (
          <div className="grid h-full grid-cols-2 p-6">
            <div className="flex flex-col">
              <div className="h-1.5 w-[20%] rounded bg-foreground/10"></div>
              <div className="mt-1 h-3 w-[80%] rounded bg-foreground/15"></div>
              <div className="mt-2 h-8 w-[80%] rounded bg-foreground/10"></div>
              <div className="mt-auto h-4 w-[60%] rounded bg-foreground/10"></div>
            </div>
            <div>
              <div className="h-full w-full rounded bg-linear-to-r from-foreground/5 to-foreground/10"></div>
            </div>
          </div>
        )
      },
      {
        title: 'Pricing Sections',
        badge: 'new',
        href: blocks + '/pricing',
        demo: (
          <div className="grid h-full grid-cols-3 gap-4 p-6">
            <div className="flex flex-col items-center rounded bg-foreground/5 p-3">
              <div className="h-1.5 w-[20%] rounded bg-foreground/10"></div>
              <div className="mt-1 h-3 w-[80%] rounded bg-foreground/15"></div>
              <div className="mt-2 h-8 w-[80%] rounded bg-foreground/5"></div>
              <div className="mt-auto h-4 w-[60%] rounded bg-foreground/10"></div>
            </div>
            <div className="flex flex-col items-center rounded bg-foreground/5 p-2">
              <div className="h-1.5 w-[20%] rounded bg-foreground/10"></div>
              <div className="mt-1 h-3 w-[80%] rounded bg-foreground/15"></div>
              <div className="mt-2 h-10 w-[80%] rounded bg-foreground/5"></div>
              <div className="mx-auto mt-auto h-4 w-[60%] rounded bg-foreground/10"></div>
            </div>
            <div className="flex flex-col items-center rounded bg-foreground/5 p-2">
              <div className="h-1.5 w-[20%] rounded bg-foreground/10"></div>
              <div className="mt-1 h-3 w-[80%] rounded bg-foreground/15"></div>
              <div className="mt-2 h-12 w-[80%] rounded bg-foreground/5"></div>
              <div className="mx-auto mt-auto h-4 w-[60%] rounded bg-foreground/10"></div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    title: 'Ecommerce',
    items: [
      {
        title: 'Product Filter',
        badge: 'new',
        href: blocks + '/product-filter',
        demo: (
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="h-4 w-[20%] rounded border"></div>
              <div className="h-4 w-[20%] rounded border"></div>
              <div className="h-4 w-[20%] rounded border border-dashed"></div>
            </div>
            <div className="mt-3 grid grid-cols-5 gap-3">
              {Array.from({ length: 8 }).map((_, index) => (
                <div className="rounded bg-foreground/5" key={index}>
                  <div className="m-1 h-8 rounded bg-foreground/5"></div>
                  <div className="m-1.5 mx-auto h-2 w-[60%] rounded bg-foreground/10"></div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        title: 'Product',
        badge: 'new',
        href: blocks + '/product',
        demo: (
          <div className="flex items-center justify-center p-8">
            <div className="w-40 rounded bg-foreground/5">
              <div className="m-1 h-20 rounded bg-foreground/5"></div>
              <div className="m-2 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="h-1.5 w-[20%] rounded-xs bg-foreground/5"></div>
                  <div className="h-1.5 w-[15%] rounded-xs bg-foreground/10"></div>
                </div>
                <div className="h-2.5 w-[60%] rounded-xs bg-foreground/10"></div>
                <div className="h-4 w-[80%] rounded-xs bg-foreground/5"></div>
              </div>
            </div>
          </div>
        )
      }
    ]
  }
]
