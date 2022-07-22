import { useRoutes } from 'react-router-dom'

import LayoutPage from './pages/Dashboard/Layout'
import MemoPage from './pages/Memo/Memo'
import SettingPage from './pages/Setting/Setting'
import TotoPage from './pages/Todo/Todo'
import PomodoroTechniquePage from './pages/PomodoroTechnique/PomodoroTechnique'

import { IconKanban, IconGallery, IconSetting } from '@douyinfe/semi-icons'

import { ReactElement } from 'react'

export interface Routes {
  path: string
  element: ReactElement
  children: Router[]
}
export interface Router {
  path: string
  element: ReactElement
  meta: Meta
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
        path: '/pomodoroTechnique',
        element: <PomodoroTechniquePage />,
        meta: {
          title: 'PomodoroTechnique',
          icon: <IconSetting />,
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

export const router = () => useRoutes(routes as Routes[])
