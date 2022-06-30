import { Space } from '@douyinfe/semi-ui'
import { IconGithubLogo, IconSetting } from '@douyinfe/semi-icons'
import Menu from './Menu'
import styled from 'styled-components'

const linkRender = () => {
  const Layout = styled.div`
    display: flex;
    justify-content: space-between;
  `
  const WorkSpace = styled.div`
    fontsize: 18px;
    font-weight: 700;
    color: #5f5f5f;
  `
  const Link = styled(Space)`
    color: rgb(158, 158, 158);
    font-size: 18px;
    cursor: pointer;
  `
  return (
    <Layout>
      <WorkSpace>WorkSpace</WorkSpace>
      <Link>
        <IconGithubLogo />
        <IconSetting />
      </Link>
    </Layout>
  )
}

export default function Sidebar() {
  return (
    <div>
      {linkRender()}
      <div style={{ height: 150 }}>热力图</div>
      <Menu />
    </div>
  )
}
