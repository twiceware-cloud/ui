'use client'

import Link from 'next/link'
import type { ClassNameValue } from 'tailwind-merge'

import { Button } from '@/components/ui/button'
import { routes } from '@/lib/docs'
import { cn } from '@/lib/utils'
import { HugeiconsIcon } from '@hugeicons/react'
import { BlueskyIcon, Github01Icon } from '@hugeicons/core-free-icons'

type FooterProps = {
  className?: ClassNameValue
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-between py-3 max-sm:justify-center md:py-4',
        className
      )}
    >
      <p className="max-sm:text-center text-sm">
        The source code is available on{' '}
        <Link className="hover:underline" href={routes.external.github} target="_blank">
          GitHub
        </Link>
        .
      </p>
      <div className="flex items-center gap-0.5">
        <div className="flex items-center">
          <Button variant={'ghost'} size="icon" asChild aria-label="Bluesky">
            <Link href={routes.external.bluesky} target="_blank">
              <HugeiconsIcon icon={BlueskyIcon} className="!size-5" />
            </Link>
          </Button>
          <Button variant={'ghost'} size="icon" asChild aria-label="GitHub">
            <Link href={routes.external.github} target="_blank">
              <HugeiconsIcon icon={Github01Icon} className="!size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
