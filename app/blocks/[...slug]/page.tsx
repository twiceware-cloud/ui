import { ArrowLeftIcon, MenuIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { blocks } from '@/.velite'
import { MDXContent } from '@/components/docs/mdx/mdx-content'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { routes } from '@/lib/docs'

import { blockSections } from '../menu'

interface PageProps {
  params: Promise<{
    slug?: string[]
  }>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const url = `blocks${params.slug ? '/' : ''}${(params.slug ?? []).join('/')}`
  const page = blocks.find(block => block.path === url)

  return {
    title: page?.title + ' - Blocks',
    description: page?.description
  }
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const url = `blocks${params.slug ? '/' : ''}${(params.slug ?? []).join('/')}`
  const page = blocks.find(block => block.path === url)

  if (!page) {
    notFound()
  }

  return (
    <div>
      <div className="flex items-start">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="cursor-pointer shadow-none max-md:hidden"
              size="icon"
              aria-label="Menu"
              title="Menu"
              variant="outline"
            >
              <MenuIcon className="!size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-52 px-1.5 py-3" align="start">
            <Link
              href={routes.blocks.base}
              className="flex items-center gap-1 px-2.5 text-muted-foreground text-sm italic transition-all hover:text-foreground hover:underline"
            >
              <ArrowLeftIcon className="size-3.5" />
              Back to blocks
            </Link>
            <div className="mt-1">
              {blockSections.map(section =>
                section.items.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="block rounded px-2.5 py-1 hover:bg-foreground/5"
                  >
                    {item.title}
                  </Link>
                ))
              )}
            </div>
          </PopoverContent>
        </Popover>
        <div className="md:-translate-x-4.5 mx-auto text-center">
          <h1 className="font-semibold text-2xl sm:text-3xl xl:text-4xl">{page.title}</h1>
          <h1 className="mt-1 max-w-lg text-center text-muted-foreground max-sm:text-sm">
            {page.description}
          </h1>
        </div>
      </div>

      {page.code && <MDXContent code={page.code} />}
    </div>
  )
}
