'use client'

import { ArrowRightIcon, EyeIcon, RotateCcwIcon } from 'lucide-react'
import Link from 'next/link'
import { type ReactNode, useState } from 'react'

import { ScrambleDemo } from '@/app/(landing)/components/demos/scramble-demo'
import { SquashDemo } from '@/app/(landing)/components/demos/squash-demo'
import { Button } from '@/components/ui/button'
import { routes } from '@/lib/docs'

import { DrawLineDemo } from './demos/draw-line-demo'
import { FlipRevealDemo } from './demos/flip-reveal-demo'
import { MouseWaveDemo } from './demos/mouse-wave-demo'
import { StaggerDemo } from './demos/stagger-demo-demo'

const demos = [
  {
    demo: FlipRevealDemo,
    href: '/docs/components/flip-reveal'
  },
  {
    demo: StaggerDemo,
    href: '/docs/components/stagger-on-scroll'
  },
  {
    demo: MouseWaveDemo,
    href: '/docs/components/mouse-wave-text'
  },
  {
    demo: DrawLineDemo,
    href: '/docs/components/draw-line-text'
  },
  {
    demo: ScrambleDemo,
    href: '/docs/components/scramble-text'
  },
  {
    demo: SquashDemo,
    href: '/docs/components/squash-text'
  }
]

const ShowDemo = ({ demo: Demo, href }: { demo: () => ReactNode; href: string }) => {
  const [key, setKey] = useState(0)
  return (
    <div className="group/demo relative flex justify-center px-6 py-12 lg:px-8 lg:py-16 xl:px-12 xl:py-24 2xl:px-16 2xl:py-32">
      <Demo key={key} />
      <div className="absolute end-4 top-4 flex items-center gap-1 opacity-0 transition-all duration-300 group-hover/demo:opacity-100">
        <Button
          onClick={() => setKey(key + 1)}
          variant="ghost"
          size="icon"
          className="cursor-pointer"
          asChild
        >
          <Link href={href}>
            <EyeIcon className="!size-5" />
          </Link>
        </Button>
        <Button
          onClick={() => setKey(key + 1)}
          variant="ghost"
          size="icon"
          className="group cursor-pointer"
        >
          <RotateCcwIcon className="!size-4.5 group-hover:-rotate-60 transition-all" />
        </Button>
      </div>
    </div>
  )
}

export const Demo = () => {
  return (
    <div className="mt-8 max-md:hidden sm:mt-12 lg:mt-16 xl:mt-24 2xl:mt-32">
      <div className="flex flex-col items-center justify-center">
        <p className="w-fit bg-linear-to-r from-foreground to-foreground/65 bg-clip-text font-[650] text-3xl text-transparent tracking-tight lg:text-4xl 2xl:text-5xl">
          Demos
        </p>
        <p className="mt-1 text-center text-muted-foreground">
          Preview interactive examples and see them in action.
        </p>
      </div>
      <div className="mt-4 grid *:border *:border-e-0 *:border-b-0 *:border-dashed *:first:border-t-0 *:odd:border-s-0 sm:mt-8 md:grid-cols-2 xl:mt-16 [&>*:nth-child(2)]:border-t-0">
        {demos.map((demo, i) => (
          <ShowDemo {...demo} key={i} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center sm:mt-8 xl:mt-12">
        <Button size="lg" asChild variant="outline">
          <Link href={routes.docs.components.base}>
            <span className="text-lg tracking-tight">Explore components</span>
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </div>
  )
}
