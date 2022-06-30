import styled from 'styled-components'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'
import { Space } from '@douyinfe/semi-ui'

const LayoutStyle = styled(Space)`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`

const AsideStyle = styled.div`
  width: 300px;
  height: auto;
  display: inline-block;
`

const ViewStyle = styled.div`
  width: 700px;
  height: auto;
  display: inline-block;
`

export default function Layout() {
  return (
    <LayoutStyle align="start" spacing={30}>
      <AsideStyle>
        <Sidebar />
      </AsideStyle>
      <ViewStyle>
        <Outlet />
      </ViewStyle>
    </LayoutStyle>
  )
}
