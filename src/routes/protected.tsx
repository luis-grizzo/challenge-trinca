import { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

const DefaultLayout = lazy(async () => await import('../layouts/Default'))

const Home = lazy(async () => await import('../pages/Home'))
const Details = lazy(async () => await import('../pages/Details'))

export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <DefaultLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/details/:id',
        element: <Details />
      }
    ]
  }
]
