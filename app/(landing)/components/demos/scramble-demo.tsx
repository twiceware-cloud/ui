'use client'

import { ScrambleText } from '@/components/gsap/scramble-text'

export const ScrambleDemo = () => {
  return (
    <ScrambleText className="font-medium font-mono text-lg sm:text-xl xl:text-3xl">
      <p>Hover your cursor to distort</p>
    </ScrambleText>
  )
}
