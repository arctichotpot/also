import { Button, Space } from '@douyinfe/semi-ui'
import { IconGithubLogo } from '@douyinfe/semi-icons'
import SwitchingLanguages from '../../components/SwitchingLanguages'

export default function ToolsButtonGroup() {
  return (
    <Space>
      <Button
        icon={<IconGithubLogo />}
        onClick={() => {
          window.open('https://github.com/arctichotpot/also')
        }}
      />
      <SwitchingLanguages />
    </Space>
  )
}
