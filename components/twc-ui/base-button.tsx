'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import {
  Button as AriaButton,
  composeRenderProps,
  type ButtonProps as AriaButtonProps
} from 'react-aria-components'
import { cn } from '@/lib/utils'
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react'
import { LoaderCircleIcon } from 'lucide-react'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors active:border-ring',
    /* Disabled */
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ',
    /* Focus Visible */
    'focus-visible:border-ring focus-visible:ring-ring/20 focus-visible:ring-[3px]',
    'active:ring-[3px]',
    /* Resets */
    'focus-visible:outline-none'
  ],
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground data-[hovered]:bg-primary/90 active:ring-ring/20 ',
        destructive:
          'bg-destructive text-destructive-foreground text-white data-[hovered]:bg-destructive/90 active:ring-destructive/50',
        outline:
          'border border-input bg-background  data-[hovered]:bg-accent data-[hovered]:text-accent-foreground focus-visible:ring-ring/20 active:ring-ring/50',
        secondary: 'bg-secondary text-secondary-foreground  data-[hovered]:bg-secondary/80',
        ghost:
          'data-[hovered]:bg-accent data-[hovered]:text-accent-foreground active:ring-ring/20 focus-visible:border focus-visible:border-primary focus-visible:ring-ring/20 active:ring-ring/50 text-sm',
        link: 'text-primary underline-offset-4 data-[hovered]:underline',
        toolbar:
          'data-[hovered]:bg-accent data-[hovered]:text-accent-foreground active:ring-ring/20 focus-visible:border focus-visible:border-primary focus-visible:ring-ring/20 active:ring-ring/50 text-sm',
        'toolbar-default':
          'border border-input bg-background  data-[hovered]:bg-accent data-[hovered]:text-accent-foreground focus-visible:ring-ring/20 active:ring-ring/50 text-sm'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9',
        auto: 'h-9 w-auto py-2 px-2',
        'icon-xs': 'size-6',
        'icon-sm': 'size-7'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface BaseButtonProps extends AriaButtonProps, VariantProps<typeof buttonVariants> {
  loading?: boolean
  disabled?: boolean
  icon?: IconSvgElement
  iconClassName?: string
  title?: string
}

export const BaseButton = ({
  className,
  disabled = false,
  variant,
  size,
  form,
  type = 'button',
  loading,
  icon,
  iconClassName,
  children,
  title = '',
  ...props
}: BaseButtonProps) => {
  if (variant === 'toolbar') {
    size = 'icon'
    title = ''
  }

  if (variant === 'toolbar-default') {
    size = 'auto'
  }

  const iconSizeClass = {
    auto: 'size-5',
    default: 'size-5',
    sm: 'size-5',
    lg: 'size-5',
    icon: 'size-5',
    'icon-sm': 'size-4',
    'icon-xs': 'size-3'
  }[size || 'default']

  const isToolbar = variant === 'toolbar' || variant === 'toolbar-default'

  return (
    <AriaButton
      form={form}
      type={type}
      isDisabled={disabled || loading}
      isPending={loading}
      className={composeRenderProps(className, className =>
        cn(
          'gap-2',
          buttonVariants({
            variant,
            size
          }),
          className
        )
      )}
      {...props}
    >
      {composeRenderProps(children, children => (
        <div className={cn('flex gap-2', size === 'icon' ? 'mx-auto' : '')}>
          {!loading && icon && (
            <HugeiconsIcon
              icon={icon}
              className={cn(
                isToolbar ? 'text-primary' : '',
                disabled ? 'text-muted-foreground' : '',
                iconSizeClass,
                iconClassName
              )}
            />
          )}
          {loading && (
            <LoaderCircleIcon className={cn('animate-spin', iconSizeClass)} aria-hidden="true" />
          )}
          {(title || children) && variant !== 'toolbar' && (
            <div className={cn(isToolbar ? 'hidden lg:flex' : '')}>{title || children}</div>
          )}
        </div>
      ))}
    </AriaButton>
  )
}

export { buttonVariants }
