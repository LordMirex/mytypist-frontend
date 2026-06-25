import { useEffect } from 'react'
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom'
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
import { TermsPage }            from '@/pages/public/TermsPage'
import { PrivacyPage }          from '@/pages/public/PrivacyPage'
import { NotFoundPage }         from '@/pages/public/NotFoundPage'
import { ProductPage }          from '@/pages/public/ProductPage'

function RootLayout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior }) }, [pathname])
  return <Outlet />
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      /* ── Marketing / Public ── */
      { path: '/',          element: <LandingPage /> },
      { path: '/auth',      element: <AuthPage /> },
      { path: '/product',   element: <ProductPage /> },
      { path: '/pricing',   element: <PricingPage /> },
      { path: '/templates', element: <PublicTemplatesPage /> },
      { path: '/about',     element: <AboutPage /> },
      { path: '/support',   element: <SupportPage /> },
      { path: '/terms',     element: <TermsPage /> },
      { path: '/privacy',   element: <PrivacyPage /> },

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
    ],
  },
])
