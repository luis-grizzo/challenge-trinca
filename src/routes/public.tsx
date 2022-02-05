import { lazy, Suspense } from 'react'
import type { RouteObject } from 'react-router-dom'

const AuthLayout = lazy(async () => await import('layouts/Auth'))

const Login = lazy(async () => await import('pages/Login'))

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<p>Loadng...</p>}>
        <AuthLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  }
]
