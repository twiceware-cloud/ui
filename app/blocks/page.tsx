import type { Metadata } from 'next'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { routes } from '@/lib/docs'

import { blockSections } from './menu'

export const metadata: Metadata = {
  title: 'Blocks',
  description:
    'Beautiful, interactive, and production-ready sections you can drop into your project with a single shadcn command.'
}

export default async function Page() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 rounded-full border px-3 py-0.5 font-medium text-sm">
          <div className="size-1.5 rounded-full bg-green-500" />
          Live
        </div>
        <p className="mt-2 w-fit bg-linear-to-r from-foreground to-foreground/65 bg-clip-text font-[650] text-3xl text-transparent tracking-tight lg:text-4xl 2xl:text-5xl">
          Blocks
        </p>
        <p className="mt-1 max-w-xl text-center text-muted-foreground max-sm:text-sm">
          Beautiful, interactive, and production-ready sections you can drop into your project with
          a single shadcn command.
        </p>
      </div>
      <div className="mt-8 sm:mt-12 xl:mt-16">
        {blockSections.map((block, index) => (
          <div key={index} className="mt-4 lg:mt-8">
            <p className="font-medium text-lg">{block.title}</p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
              {block.items.map((item, index) => (
                <Link href={item.href} key={index}>
                  <Card className="group relative overflow-hidden rounded border shadow-none">
                    <div className="h-50 bg-foreground/3 opacity-60 grayscale-100 transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                      {item.demo}
                    </div>
                    {item.badge && (
                      <div className="absolute end-2 top-2 rounded border border-dashed bg-muted px-1.5 py-0.5 text-xs">
                        {item.badge === 'new' && <p>New</p>}
                      </div>
                    )}
                    <p className="p-4">{item.title}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="mt-6 font-medium text-lg">More Blocks</p>
        <Link href={routes.external.bluesky} className="mt-4 block max-w-88" target="_blank">
          <Card className="overflow-hidden rounded border shadow-none">
            <div className="relative h-44 bg-foreground/3">
              <Badge className="absolute start-3 top-3">In Development</Badge>
              <div className="flex h-full items-center justify-center gap-4 opacity-60 transition-all duration-300 hover:opacity-100">
                <div className="h-0 w-0 border-transparent border-r-20 border-b-30 border-b-foreground/15 border-l-20" />
                <div className="size-8 bg-foreground/15" />
                <div className="size-9 rounded-full bg-foreground/15" />
              </div>
            </div>
            <div className="p-4">
              <p className="font-medium text-lg/none">New stuff on the way</p>
              <p className="mt-0.5 text-muted-foreground text-sm italic">
                Keep in touch with what’s next!
              </p>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  )
}
