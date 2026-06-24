import { createBrowserRouter } from 'react-router-dom'
import { Shell } from '@/components/layout/Shell'
import { StudioPage }    from '@/pages/studio/StudioPage'
import { TemplatesPage } from '@/pages/templates/TemplatesPage'
import { PipelinePage }  from '@/pages/pipeline/PipelinePage'
import { SignPage }      from '@/pages/sign/SignPage'
import { VaultPage }     from '@/pages/vault/VaultPage'
import { SettingsPage }  from '@/pages/settings/SettingsPage'
import { AdminPage }     from '@/pages/admin/AdminPage'
import { AuthPage }      from '@/pages/auth/AuthPage'
import { LandingPage }   from '@/pages/landing/LandingPage'

/* Public marketing pages */
import { PricingPage }          from '@/pages/public/PricingPage'
import { PublicTemplatesPage }  from '@/pages/public/PublicTemplatesPage'
import { AboutPage }            from '@/pages/public/AboutPage'
import { SupportPage }          from '@/pages/public/SupportPage'
import { NotFoundPage }         from '@/pages/public/NotFoundPage'

export const router = createBrowserRouter([
  /* ── Marketing / Public ── */
  { path: '/',          element: <LandingPage /> },
  { path: '/auth',      element: <AuthPage /> },
  { path: '/pricing',   element: <PricingPage /> },
  { path: '/templates', element: <PublicTemplatesPage /> },
  { path: '/about',     element: <AboutPage /> },
  { path: '/support',   element: <SupportPage /> },

  /* Stub routes — render 404 with helpful context */
  { path: '/blog',      element: <NotFoundPage /> },
  { path: '/careers',   element: <NotFoundPage /> },
  { path: '/partner',   element: <NotFoundPage /> },
  { path: '/press',     element: <NotFoundPage /> },
  { path: '/terms',     element: <NotFoundPage /> },
  { path: '/privacy',   element: <NotFoundPage /> },
  { path: '/cookies',   element: <NotFoundPage /> },
  { path: '/security',  element: <NotFoundPage /> },
  { path: '/api',       element: <NotFoundPage /> },
  { path: '/status',    element: <NotFoundPage /> },
  { path: '/changelog', element: <NotFoundPage /> },

  /* ── App Shell ── */
  {
    path: '/studio',
    element: <Shell />,
    children: [
      { index: true,            element: <StudioPage />   },
      { path: 'templates',      element: <TemplatesPage /> },
      { path: 'pipeline',       element: <PipelinePage /> },
      { path: 'sign',           element: <SignPage />      },
      { path: 'vault',          element: <VaultPage />     },
      { path: 'settings',       element: <SettingsPage />  },
      { path: 'admin',          element: <AdminPage />     },
    ],
  },

  /* ── 404 ── */
  { path: '*', element: <NotFoundPage /> },
])
