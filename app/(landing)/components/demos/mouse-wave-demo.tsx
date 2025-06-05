'use client'

import { MouseWaveText } from '@/components/gsap/mouse-wave-text'

export const MouseWaveDemo = () => (
  <MouseWaveText
    className="font-semibold text-5xl"
    textClassName="text-blue-500"
    shadowClassName="text-blue-500/20"
  >
    Ready to test it?
  </MouseWaveText>
)
