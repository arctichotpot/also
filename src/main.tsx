import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { RecoilRoot } from 'recoil'
import { LocaleProvider } from '@douyinfe/semi-ui'
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <RecoilRoot>
      <HashRouter>
        <LocaleProvider locale={en_GB}>
          <App />
        </LocaleProvider>
      </HashRouter>
    </RecoilRoot>
  </StrictMode>
)
