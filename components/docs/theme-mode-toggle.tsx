'use client'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HugeiconsIcon } from '@hugeicons/react'
import { Sun01Icon, Moon02Icon } from '@hugeicons/core-free-icons'

export const ThemeModeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      size="icon"
      variant="ghost"
      suppressHydrationWarning
      title={theme === 'light' ? 'Light' : 'Dark'}
      className="relative cursor-pointer overflow-hidden"
      aria-label="Theme mode"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <HugeiconsIcon
        icon={Sun01Icon}
        className={cn(
          '!size-5 absolute scale-50 opacity-0 transition-all [html.dark_&]:scale-100 [html.dark_&]:opacity-100'
        )}
      />

      <HugeiconsIcon
        icon={Moon02Icon}
        className={cn(
          '!size-5 absolute scale-50 opacity-0 transition-all [html.light_&]:scale-100 [html.light_&]:opacity-100'
        )}
      />
    </Button>
  )
}
