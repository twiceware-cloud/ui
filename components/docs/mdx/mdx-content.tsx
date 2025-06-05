import Link from 'next/link'
import type React from 'react'

import * as runtime from 'react/jsx-runtime'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

import { BlockPreview } from './block-preview'
import { Callout } from './callout'
import { CodePreview } from './code-preview'
import { DemoCodePreview } from './demo-code-preview'
import { InstallationCommand } from './installation-command'

const sharedComponents = {
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-10 scroll-m-16 border-border border-b pb-2 font-medium text-xl sm:text-2xl',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn('mt-8 scroll-m-16 font-medium text-xl', className)} {...props} />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn('mt-6 scroll-m-16 font-medium text-lg', className)} {...props} />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative select-all text-nowrap rounded bg-muted px-[6px] py-[3px] font-mono text-[13px]',
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn('[&:not(:first-child)]:mt-2', className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('ms-5 mt-3 list-disc', className)} {...props} />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <strong className={cn('font-medium', className)} {...props} />
  ),
  a: ({ className, href, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      target={href.toString().includes('https://') ? '_blank' : '_self'}
      href={href}
      className={cn('text-primary hover:underline', className)}
      {...props}
    />
  ),
  Step: ({ className, ...props }: React.ComponentProps<'h3'>) => (
    <h3
      className={cn('step mt-8 mb-4 scroll-m-20 font-medium text-[16px] tracking-tight', className)}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div className="mb-12 ml-4 border-l pl-8 [counter-reset:step]" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto rounded border">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  thead: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className={cn('border-b last:border-b-0', className)} {...props} />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('m-0 border-b p-0 last:border-b-0', className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border-e px-4 py-2 text-left font-medium last:border-e-0 [&[align=center]]:text-center [&[align=right]]:text-end',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'text-nowrap border-e px-4 py-2 text-left last:border-e-0 [&[align=center]]:text-center [&[align=right]]:text-end',
        className
      )}
      {...props}
    />
  ),
  Link,
  DemoCodePreview,
  Callout,
  CodePreview,
  InstallationCommand,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  BlockPreview
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
}

export const MDXContent = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...sharedComponents }} />
}
