import styled from 'styled-components'
import { Outlet } from 'react-router'
import { Space } from '@douyinfe/semi-ui'
import { Typography } from '@douyinfe/semi-ui'
import Menu from './Menu'
import Statistics from './Statistics'

const LayoutStyle = styled(Space)`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`

const AsideStyle = styled.div`
  width: 240px;
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
        <Typography.Title
          heading={4}
          style={{ color: '#5f5f5f', marginBottom: 20 }}
        >
          WorkSpace
        </Typography.Title>
        <Statistics />
        <Menu />
      </AsideStyle>
      <ViewStyle>
        <Outlet />
      </ViewStyle>
    </LayoutStyle>
  )
}
