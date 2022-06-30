import { Nav } from '@douyinfe/semi-ui'
import { IconKanban, IconGallery } from '@douyinfe/semi-icons'

export default function Menu() {
  const menu = [
    { itemKey: 'user', text: '随心记', icon: <IconGallery /> },
    { itemKey: 'union', text: '看板', icon: <IconKanban /> },
  ]

  return (
    <Nav
      style={{
        border: 'none',
        background: 'none',
      }}
      items={menu}
      onSelect={(data) => console.log('trigger onSelect: ', data)}
      onClick={(data) => console.log('trigger onClick: ', data)}
    />
  )
}
