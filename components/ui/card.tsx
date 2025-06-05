import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const Card = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('rounded-xl border bg-card text-card-foreground shadow', props.className)}
    {...props}
  />
)

const CardHeader = (props: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 p-6', props.className)} {...props} />
)

const CardTitle = (props: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('font-semibold leading-none tracking-tight', props.className)} {...props} />
)

const CardDescription = (props: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('text-muted-foreground text-sm', props.className)} {...props} />
)

const CardContent = (props: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', props.className)} {...props} />
)

const CardFooter = (props: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center p-6 pt-0', props.className)} {...props} />
)

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
