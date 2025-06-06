import { Sad01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type * as React from 'react'
import { useMemo } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  errors: Partial<Record<string, string>>
  title?: string
}

export const FormErrors: React.FC<Props> = ({
  errors,
  title = 'Oops! Something went wrong. Please try again.'
}) => {
  const errorMessages = useMemo(() => {
    if (!errors) return []
    return Object.values(errors)
  }, [errors])

  if (errorMessages.length === 0) {
    return null
  }

  return (

    <div className="mx-4 mb-6 rounded-lg border border-destructive p-4 pt-2 text-destructive" role="alert">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="flex-none">
            <div
              className={cn('mx-auto flex size-9 shrink-0 items-center justify-center rounded-full bg-destructive/20 sm:mx-0 sm:size-10')}
            >
              <HugeiconsIcon icon={Sad01Icon} className={cn('size-5 stroke-3 text-destructive')} />
            </div>
          </div>
          <div className="flex-1 font-medium text-base">{title}</div>
        </div>
        <div className="grow space-y-1">
          <ul
            className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md list-inside list-disc pl-12 text-sm opacity-80"
          >
            {errorMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
