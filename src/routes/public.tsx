import { lazy, Suspense } from 'react'
import type { RouteObject } from 'react-router-dom'

const AuthLayout = lazy(async () => await import('layouts/Auth'))
import { Loading } from 'pages/Loading'

const Login = lazy(async () => await import('pages/Login'))

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
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
