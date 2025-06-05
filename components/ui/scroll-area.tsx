import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import type * as React from 'react'

import { cn } from '@/lib/utils'

export type ScrollAreaProps = React.ComponentProps<typeof ScrollAreaPrimitive.Root>

export const ScrollArea = ({ className, children, ...props }: ScrollAreaProps) => (
  <ScrollAreaPrimitive.Root className={cn('relative overflow-hidden', className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="size-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
)

export type ScrollBarProps = React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>

export const ScrollBar = ({ className, orientation = 'vertical', ...props }: ScrollBarProps) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      {
        'h-full w-2 border-l border-l-transparent p-px': orientation === 'vertical',
        'h-2 flex-col border-t border-t-transparent p-px': orientation === 'horizontal'
      },
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-foreground/10 hover:bg-foreground/20" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
)
