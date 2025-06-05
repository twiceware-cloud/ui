'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import type * as React from 'react'

import { cn } from '@/lib/utils'

export const Accordion = AccordionPrimitive.Root

export type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>

export const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
  return <AccordionPrimitive.Item className={cn('border-b', className)} {...props} />
}

export type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger>

export const AccordionTrigger = ({ className, children, ...props }: AccordionTriggerProps) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'flex flex-1 items-center justify-between py-4 text-left font-medium text-sm transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content>

export const AccordionContent = ({ className, children, ...props }: AccordionContentProps) => {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}
