import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react';

import { config } from './config.ts';
import { router } from './router';

import './i18n';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={config.clerk.key}
      afterSignOutUrl={config.clerk.afterSignOutUrl}
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
