import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Shell } from '@/components/layout/Shell'
import { StudioPage } from '@/pages/studio/StudioPage'
import { TemplatesPage } from '@/pages/templates/TemplatesPage'
import { PipelinePage } from '@/pages/pipeline/PipelinePage'
import { SignPage } from '@/pages/sign/SignPage'
import { VaultPage } from '@/pages/vault/VaultPage'
import { SettingsPage } from '@/pages/settings/SettingsPage'
import { AdminPage } from '@/pages/admin/AdminPage'
import { AuthPage } from '@/pages/auth/AuthPage'
import { LandingPage } from '@/pages/landing/LandingPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/studio',
    element: <Shell />,
    children: [
      { index: true, element: <StudioPage /> },
      { path: 'templates', element: <TemplatesPage /> },
      { path: 'pipeline', element: <PipelinePage /> },
      { path: 'sign', element: <SignPage /> },
      { path: 'vault', element: <VaultPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'admin', element: <AdminPage /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])
