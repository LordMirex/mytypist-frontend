import { useEffect } from 'react'
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom'
import { Shell }      from '@/components/layout/Shell'
import { AdminShell } from '@/components/layout/AdminShell'
import { DashboardPage }     from '@/pages/home/DashboardPage'
import { NotificationsPage } from '@/pages/notifications/NotificationsPage'
import { StudioPage }        from '@/pages/studio/StudioPage'
import { TemplatesPage }     from '@/pages/templates/TemplatesPage'
import { PipelinePage }      from '@/pages/pipeline/PipelinePage'
import { SignPage }          from '@/pages/sign/SignPage'
import { VaultPage }         from '@/pages/vault/VaultPage'
import { SettingsPage }      from '@/pages/settings/SettingsPage'
import { AuthPage }          from '@/pages/auth/AuthPage'
import { LandingPage }       from '@/pages/landing/LandingPage'

/* Public marketing pages */
import { PricingPage }          from '@/pages/public/PricingPage'
import { PublicTemplatesPage }  from '@/pages/public/PublicTemplatesPage'
import { AboutPage }            from '@/pages/public/AboutPage'
import { SupportPage }          from '@/pages/public/SupportPage'
import { TermsPage }            from '@/pages/public/TermsPage'
import { PrivacyPage }          from '@/pages/public/PrivacyPage'
import { NotFoundPage }         from '@/pages/public/NotFoundPage'
import { ProductPage }          from '@/pages/public/ProductPage'
import { FaqPage }              from '@/pages/public/FaqPage'
import { ContactPage }          from '@/pages/public/ContactPage'
import { SecurityPage }         from '@/pages/public/SecurityPage'
import { ChangelogPage }        from '@/pages/public/ChangelogPage'
import { BlogPage }             from '@/pages/public/BlogPage'
import { SigningPage }          from '@/pages/public/SigningPage'
import { StatusPage }           from '@/pages/public/StatusPage'
import { CareersPage }          from '@/pages/public/CareersPage'

/* Admin sub-pages */
import { AdminOverviewPage }  from '@/pages/admin/AdminOverviewPage'
import { AdminUsersPage }     from '@/pages/admin/AdminUsersPage'
import { AdminDocumentsPage } from '@/pages/admin/AdminDocumentsPage'
import { AdminRevenuePage }   from '@/pages/admin/AdminRevenuePage'
import { AdminFlagsPage }     from '@/pages/admin/AdminFlagsPage'
import { AdminAuditPage }     from '@/pages/admin/AdminAuditPage'
import { AdminTemplatesPage } from '@/pages/admin/AdminTemplatesPage'
import { AdminSettingsPage }  from '@/pages/admin/AdminSettingsPage'

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
      { path: '/faq',       element: <FaqPage /> },
      { path: '/contact',   element: <ContactPage /> },
      { path: '/security',  element: <SecurityPage /> },
      { path: '/changelog', element: <ChangelogPage /> },
      { path: '/blog',      element: <BlogPage /> },
      { path: '/sign/:token', element: <SigningPage /> },
      { path: '/status',    element: <StatusPage /> },
      { path: '/careers',   element: <CareersPage /> },

      /* ── App Shell ── */
      {
        path: '/studio',
        element: <Shell />,
        children: [
          { index: true,          element: <DashboardPage />    },
          { path: 'new',          element: <StudioPage />       },
          { path: 'notifications', element: <NotificationsPage /> },
          { path: 'templates',    element: <TemplatesPage />    },
          { path: 'pipeline',     element: <PipelinePage />     },
          { path: 'sign',         element: <SignPage />         },
          { path: 'vault',        element: <VaultPage />        },
          { path: 'settings',     element: <SettingsPage />     },
        ],
      },

      /* ── Admin Shell ── */
      {
        path: '/admin',
        element: <AdminShell />,
        children: [
          { index: true,          element: <AdminOverviewPage />  },
          { path: 'users',        element: <AdminUsersPage />     },
          { path: 'documents',    element: <AdminDocumentsPage /> },
          { path: 'revenue',      element: <AdminRevenuePage />   },
          { path: 'flags',        element: <AdminFlagsPage />     },
          { path: 'audit',        element: <AdminAuditPage />     },
          { path: 'templates',    element: <AdminTemplatesPage /> },
          { path: 'settings',     element: <AdminSettingsPage />  },
        ],
      },

      /* ── 404 ── */
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
