/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { ThemeProvider } from '@/components/theme-provider';
import { ErrorBoundary } from './ErrorBoundary';
import { Loader } from '@/components/Loader';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@/clients/query.client';

const SignInView = lazy(() => import('../views/sign-in'));
const HomeView = lazy(() => import('../views/home'));

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorBoundary />,
    element: (
      <QueryClientProvider client={getQueryClient()}>
        <ThemeProvider>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </ThemeProvider>
      </QueryClientProvider>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader fullscreen />}>
            <HomeView />
          </Suspense>
        )
      },
      {
        path: '/sign-in',
        element: (
          <Suspense fallback={<Loader fullscreen />}>
            <SignInView />
          </Suspense>
        )
      }
    ]
  },
]);
