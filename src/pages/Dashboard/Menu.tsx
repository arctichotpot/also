import { Nav } from '@douyinfe/semi-ui'
import { useEffect, useState } from 'react'
import { Router, routes, Routes } from '../../router'
import { useNavigate, useLocation } from 'react-router-dom'

interface Item {
  itemKey: string
  domEvent: MouseEvent
  isOpen: boolean
}

export default function Menu() {
  const [selectKeys, setSelectKeys] = useState<string[]>(['memo'])
  const navigate = useNavigate()
  const location = useLocation()

  const routesChildren: Routes = routes.find(
    (route) => route.path === '/'
  ) as unknown as Routes

  const menuItems = routesChildren?.children.map((route: Router) => ({
    itemKey: route.path,
    text: route.meta.title,
    icon: route.meta.icon,
  }))

  useEffect(() => {
    let path: string = ''
    if (location.pathname === '/') {
      path = menuItems[0].itemKey as string
    } else path = location.pathname

    setSelectKeys([path])
    navigate(path)
  }, [])

  const handleClick = (item: Item) => {
    setSelectKeys([item.itemKey])
    navigate(item.itemKey)
  }

  return (
    <Nav
      selectedKeys={selectKeys}
      onClick={(item) => handleClick(item as Item)}
      items={menuItems}
    />
  )
}
