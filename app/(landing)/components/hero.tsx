import { ArrowRightIcon, BlocksIcon, ChevronRightIcon, RocketIcon, ShapesIcon } from 'lucide-react'
import Link from 'next/link'

import { RevealText } from '@/components/gsap/reveal-text'
import { SpringButton } from '@/components/gsap/spring-button'
import { TextFallButton } from '@/components/gsap/text-fall-button'
import { TiltCard } from '@/components/gsap/tilt-card'
import { Button } from '@/components/ui/button'
import { routes } from '@/lib/docs'

import { ProductDemo } from './demos/product-demo'
import { RevealTextDemo } from './demos/reveal-text-demo'

export const Hero = () => {
  return (
    <div className="relative mt-4 flex justify-center md:pt-8 lg:pt-16 xl:pt-24 2xl:pt-32">
      <div className="flex max-w-3xl flex-col items-center text-center">
        <Link
          href={routes.blocks.base}
          className="flex items-center gap-2 rounded-full border py-1 ps-2 pe-3 text-sm hover:shadow"
        >
          <RocketIcon className="size-3.5 text-foreground/70" />
          <hr className="h-full w-px border-e" />
          <p>Beta</p>
        </Link>
        <div className="mt-4 font-[580] text-2xl leading-[1.15] tracking-tight sm:text-4xl md:text-5xl 2xl:text-6xl">
          <p>Accessible + Customizable</p>
        </div>
        <RevealText
          type="lines"
          gsapVars={{ stagger: 0.35 }}
          splitTextVars={{ mask: 'lines' }}
          className="mt-4 sm:mt-6 lg:mt-8"
        >
          <p className="text-foreground/90 text-sm tracking-tight sm:text-lg md:text-xl">
            Accessible shadcn/ui compatible react components, optimized for Laravel and Inertia.
          </p>
        </RevealText>
        <div className="mt-6 flex flex-wrap justify-center gap-4 max-sm:items-center sm:mt-8 xl:mt-12 xl:gap-6 2xl:mt-16">
          <Button size="lg" asChild className="h-11 gap-2.5 px-6 shadow-primary/20 shadow-xl">
            <Link href={routes.blocks.base}>
              <BlocksIcon className="!size-5" />
              Building Blocks
              <ChevronRightIcon />
            </Link>
          </Button>
          <Button size="lg" variant="ghost" asChild className="h-11 gap-2.5 px-6">
            <Link href={routes.docs.components.base}>
              <ShapesIcon className="!size-4.5" />
              Components
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
