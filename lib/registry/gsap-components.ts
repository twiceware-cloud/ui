import type { RegistryItem } from 'shadcn/registry'

export const gsapComponentRegistries: RegistryItem[] = [
  {
    name: 'tooltip',
    type: 'registry:ui',
    $schema: 'https://ui.shadcn.com/schema/registry.json',
    dependencies: ['react-aria-components'],
    files: [
      {
        path: 'twc-ui/tooltip.tsx',
        type: 'registry:ui',
        target: '~/components/ui/twc-ui/tooltip.tsx'
      }
    ]
  },
  {
    name: 'base-button',
    type: 'registry:ui',
    dependencies: ['@hugeicons/react', 'react-aria-components', 'lucide-react'],
    registryDependencies: [],
    files: [
      {
        path: 'twc-ui/base-button.tsx',
        type: 'registry:ui',
        target: 'components/twc-ui/base-button.tsx'
      }
    ]
  },
  {
    name: 'calendar',
    type: 'registry:ui',
    dependencies: ['@internationalized/date', 'react-aria-components', 'lucide-react'],
    registryDependencies: ['https://ui.twiceware.cloud/r/twc-ui/button'],
    files: [
      {
        path: 'twc-ui/calendar.tsx',
        type: 'registry:ui',
        target: 'components/twc-ui/calendar.tsx'
      }
    ]
  },
  {
    name: 'button',
    type: 'registry:ui',
    dependencies: [],
    registryDependencies: [
      'https://ui.twiceware.cloud/r/twc-ui/base-button',
      'https://ui.twiceware.cloud/r/twc-ui/tooltip'
    ],
    files: [
      {
        path: 'twc-ui/button.tsx',
        type: 'registry:ui',
        target: 'components/twc-ui/button.tsx'
      }
    ]
  }
]
