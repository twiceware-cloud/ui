'use client'

import { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers'
import type { CodeToHastOptionsCommon } from '@shikijs/types'
import { useEffect, useMemo, useState } from 'react'
import { codeToHtml } from 'shiki'

import { fetchFile } from '@/lib/docs'
import { cn } from '@/lib/utils'

import { ClientCodePreview } from './client-code-preview'
import { ClipboardButton } from './clipboard-button'

type Props = {
  path?: string
  code?: string
  collapsible?: boolean
  removeExtraProps?: boolean
  lang?: CodeToHastOptionsCommon['lang']
  className?: string
}

export const CodePreview = ({
  path,
  code,
  collapsible,
  removeExtraProps = false,
  lang = 'tsx',
  className
}: Props) => {
  const [codeContent, setCodeContent] = useState(code)
  const [highlightedHtml, setHighlightedHtml] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (!codeContent && path) {
      fetchFile(path).then(setCodeContent)
    }
  }, [path, codeContent])

  const filteredCode = useMemo(() => {
    if (!removeExtraProps) return codeContent
    return codeContent?.replaceAll(/\s*\{\s*\.\.\.props\s*}\s*/g, '')
  }, [removeExtraProps, codeContent])

  useEffect(() => {
    if (filteredCode)
      codeToHtml(filteredCode, {
        lang: lang,
        theme: 'github-dark-default',
        transformers: [
          transformerNotationHighlight({ matchAlgorithm: 'v3' }),
          transformerNotationDiff({ matchAlgorithm: 'v3' })
        ]
      }).then(setHighlightedHtml)
  }, [filteredCode, lang, codeContent])

  const codeWithoutComments = useMemo(() => {
    const regexPattern = /\/\/ \[!code( [^\]]+)?]/g
    return filteredCode?.replaceAll(regexPattern, '')
  }, [filteredCode])

  if (!highlightedHtml) {
    return <p>Loading...</p>
  }

  return (
    <div className={cn('relative mt-5 mb-4 overflow-hidden rounded', className)}>
      <ClientCodePreview html={highlightedHtml} collapsible={collapsible} />
      <div className="absolute end-3 top-3 z-10">
        <ClipboardButton text={codeWithoutComments ?? ''} />
      </div>
    </div>
  )
}
