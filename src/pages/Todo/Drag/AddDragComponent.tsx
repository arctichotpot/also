import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Input, Space, Toast } from '@douyinfe/semi-ui'
import { listenClick } from './elementClick'
interface Props {
  onAdd: (name: string) => void
}

const AddDragComponentStyle = styled.div`
  width:220px;
  minWidth: 220px,
  height: auto;
`

export default function AddDragComponent(props: Props) {
  const { onAdd } = props
  const [title, setTitle] = useState('')
  const [visible, setVisible] = useState(false)

  const handleAdd = () => {
    if (title) {
      onAdd(title)
      setTitle('')
      setVisible(false)
    } else Toast.error('Please enter the name of the list!')
  }

  useEffect(() => {
    const listDom = document.querySelector('#list') as HTMLElement
    listenClick(listDom, (res) => {
      if (visible && !res) setVisible(false)
    })
  }, [visible])

  return (
    <AddDragComponentStyle id="list">
      <div style={{ display: visible ? 'inline-block' : 'none' }}>
        <Space style={{ padding: 12 }}>
          <Input
            value={title}
            onChange={(e) => setTitle(e)}
            placeholder="Please enter a title"
          />
          <Button onClick={handleAdd}>Add</Button>
        </Space>
      </div>

      <Button
        style={{ display: visible ? 'none' : 'block' }}
        theme="solid"
        type="primary"
        block
        onClick={() => setVisible(true)}
      >
        Add List
      </Button>
    </AddDragComponentStyle>
  )
}
