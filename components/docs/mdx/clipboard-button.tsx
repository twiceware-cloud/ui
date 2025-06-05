'use client'

import { CheckIcon, ClipboardIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { copyToClipboard } from '@/lib/docs'
import { cn } from '@/lib/utils'

export const ClipboardButton = ({ text }: { text: string }) => {
  const [hasCopied, setHasCopied] = useState(false)

  const copy = () => {
    setHasCopied(true)
    copyToClipboard(text).then()
    setTimeout(() => {
      setHasCopied(false)
    }, 3000)
  }

  return (
    <Button
      className="relative size-8 cursor-pointer items-center rounded-md hover:bg-white/25"
      aria-label="Copy"
      variant="ghost"
      onClick={copy}
    >
      <CheckIcon
        className={cn(
          '-translate-x-1/2 -translate-y-1/2 absolute start-1/2 top-1/2 size-4 text-white transition-all',
          {
            'scale-0 opacity-0': !hasCopied
          }
        )}
      />
      <ClipboardIcon
        className={cn(
          '-translate-x-1/2 -translate-y-1/2 absolute start-1/2 top-1/2 size-4 text-white transition-all',
          {
            'scale-0 opacity-0': hasCopied
          }
        )}
      />
    </Button>
  )
}
