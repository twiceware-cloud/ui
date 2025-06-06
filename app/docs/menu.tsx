import type { SidebarNavItem } from '@/components/docs/layouts'
import { routes } from '@/lib/docs'
import { GeometricShapes01Icon, BookOpen01Icon, WebhookIcon } from '@hugeicons/core-free-icons'

const base = routes.docs

const components = base.components.base

export const docsComponentNavItems: SidebarNavItem[] = [
  {
    title: 'Forms',
    isLabel: true
  },
  {
    title: 'Form Errors',
    href: `${components}/form-errors`
  },
  {
    title: 'Buttons',
    isLabel: true
  },
  {
    title: '(Base-) Button',
    href: `${components}/base-button`
  },
  {
    title: 'Navigation',
    isLabel: true
  },
  {
    title: 'Overlays',
    isLabel: true
  }
]

export const docsSidebarNavItems: SidebarNavItem[] = [
  {
    title: 'Getting Started',
    icon: BookOpen01Icon,
    expanded: true,
    items: [
      {
        title: 'Introduction',
        href: base.home
      },
      {
        title: 'Installation',
        href: base.installation
      }
    ]
  },
  {
    title: 'Components',
    icon: GeometricShapes01Icon,
    expanded: true,
    items: docsComponentNavItems
  },
  {
    title: 'Hooks',
    icon: WebhookIcon,
    expanded: true,
    items: [
      {
        title: 'useForm',
        href: base.home
      }
    ]
  }
]
