import { useRoutes } from 'react-router-dom'

import LayoutPage from './pages/Dashboard/Layout'
import MemoPage from './pages/Memo/Memo'
import SettingPage from './pages/Setting/Setting'
import TotoPage from './pages/Todo/Todo'
import { IconKanban, IconGallery, IconSetting } from '@douyinfe/semi-icons'

import { ReactElement } from 'react'

export interface Router {
  path?: string
  element: ReactElement
  index?: boolean
  meta: Meta
}

export interface Routes {
  path: string
  element: ReactElement
  children: Router[]
}

export interface Meta {
  title: string
  icon?: ReactElement
}

export const routes: Routes[] = [
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        path: '/memo',
        element: <MemoPage />,
        meta: {
          title: 'Memo',
          icon: <IconGallery />,
        },
      },
      {
        path: '/todo',
        element: <TotoPage />,
        meta: {
          title: 'ToDo',
          icon: <IconKanban />,
        },
      },
      {
        path: '/setting',
        element: <SettingPage />,
        meta: {
          title: 'Setting',
          icon: <IconSetting />,
        },
      },
    ],
  },
]

export const router = () => useRoutes(routes)
