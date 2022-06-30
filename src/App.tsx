import { router } from './router'
import { Outlet } from 'react-router-dom'
import './styles/index.scss'

export default function App() {
  return (
    <>
      {router()}
      <Outlet />
    </>
  )
}
