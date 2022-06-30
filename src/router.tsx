import { useRoutes } from 'react-router-dom'

import LayoutPage from './pages/Dashboard/Layout'
import DashboardPage from './pages/Dashboard/Dashboard'

import { ReactElement } from 'react'

export interface Router {
  path?: string
  element: ReactElement
  index?: boolean
  children?: Router[]
}

export const routers: Router[] = [
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        // path: '/dashboard',
        element: <DashboardPage />,
        index: true,
      },
    ],
  },
]

export const router = () => useRoutes(routers)
