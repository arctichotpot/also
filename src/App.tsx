import { router } from './router'
import { Outlet } from 'react-router-dom'
import './styles/index.scss'
import { LocaleProvider } from '@douyinfe/semi-ui'
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB'
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'
import { useRecoilValue } from 'recoil'
import { appState } from './store/app'

export default function App() {
  const state = useRecoilValue(appState)
  return (
    <>
      <LocaleProvider locale={state.language === 'en' ? en_GB : zh_CN}>
        {router()}
        <Outlet />
      </LocaleProvider>
    </>
  )
}
