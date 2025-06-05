import { Slot } from '@radix-ui/react-slot'
import { ChevronRightIcon, EllipsisIcon } from 'lucide-react'
import type * as React from 'react'

import { cn } from '@/lib/utils'

export type BreadcrumbProps = React.ComponentProps<'nav'>

export const Breadcrumb = ({ ...props }: BreadcrumbProps) => (
  <nav aria-label="breadcrumb" {...props} />
)

export type BreadcrumbListProps = React.ComponentProps<'ol'>

export const BreadcrumbList = ({ className, ...props }: BreadcrumbListProps) => (
  <ol
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5',
      className
    )}
    {...props}
  />
)

export type BreadcrumbItemProps = React.ComponentProps<'li'>

export const BreadcrumbItem = ({ className, ...props }: BreadcrumbItemProps) => (
  <li className={cn('inline-flex items-center gap-1.5', className)} {...props} />
)

export type BreadcrumbLinkProps = React.ComponentProps<'a'> & { asChild?: boolean }

export const BreadcrumbLink = ({ asChild, className, ...props }: BreadcrumbLinkProps) => {
  const Comp = asChild ? Slot : 'a'

  return <Comp className={cn('transition-colors hover:text-foreground', className)} {...props} />
}

export type BreadcrumbPageProps = React.ComponentProps<'span'>

export const BreadcrumbPage = ({ className, ...props }: BreadcrumbPageProps) => (
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('font-normal text-foreground', className)}
    {...props}
  />
)

export type BreadcrumbSeparatorProps = React.ComponentProps<'li'>

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:size-3.5', className)}
    {...props}
  >
    {children ?? <ChevronRightIcon />}
  </li>
)

export type BreadcrumbEllipsisProps = React.ComponentProps<'li'>

export const BreadcrumbEllipsis = ({ className, ...props }: BreadcrumbEllipsisProps) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <EllipsisIcon className="size-4" />
    <span className="sr-only">More</span>
  </span>
)
