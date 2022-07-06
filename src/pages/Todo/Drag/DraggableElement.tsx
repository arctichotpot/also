import { Droppable } from 'react-beautiful-dnd'
import ListItem from './ListItem'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  Button,
  Card,
  Space,
  Typography,
  Input,
  Toast,
} from '@douyinfe/semi-ui'
import { listenClick } from './elementClick'
import { nanoid } from 'nanoid'
import { TodoChildrenProps, TodoProps } from '../../../db/db'

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
`

interface Props {
  prefix: string
  elements: TodoProps
  callback: (value: TodoChildrenProps) => void
}

const DraggableElement = (props: Props) => {
  const { prefix, elements, callback } = props

  const cardStyle = {
    minWidth: 220,
    width: 220,
    height: 'auto',
    margin: '10px 0',
  }

  const onAddItemCallback = (title: string) => {
    const newItem: TodoChildrenProps = {
      id: nanoid(),
      content: title,
      pid: prefix,
    }
    callback(newItem)
  }

  return (
    <Card
      style={cardStyle}
      bodyStyle={{
        padding: 10,
      }}
    >
      <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title heading={6}>{elements.title}</Typography.Title>
      </Space>
      <ColumnHeader>{}</ColumnHeader>
      <Droppable droppableId={`${prefix}`}>
        {(provided: {
          droppableProps: JSX.IntrinsicAttributes &
            React.ClassAttributes<HTMLDivElement> &
            React.HTMLAttributes<HTMLDivElement>
          innerRef:
            | React.LegacyRef<HTMLDivElement>
            | React.RefObject<HTMLDivElement>
          placeholder: string
        }) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {elements?.children?.map((item, index: any) => (
              <ListItem key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
            <AddItem prefix={prefix} callback={onAddItemCallback} />
          </div>
        )}
      </Droppable>
    </Card>
  )
}

interface AddItemProps {
  prefix: string
  callback: (str: string) => void
}
const AddItem = (props: AddItemProps) => {
  const { prefix, callback } = props
  const [title, setTitle] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dom = document.getElementById(prefix) as HTMLElement
    listenClick(dom, (res) => {
      if (visible && !res) setVisible(false)
    })
  }, [visible])

  const handleAdd = () => {
    if (title) {
      callback(title)
      setTitle('')
      setVisible(false)
    } else Toast.error('Please enter the name of the card!')
  }

  return (
    <div id={prefix}>
      <div style={{ display: visible ? 'inline-block' : 'none' }}>
        <Space>
          <Input
            value={title}
            placeholder="Please enter a title"
            onChange={(e) => setTitle(e)}
          />
          <Button onClick={handleAdd}>Add</Button>
        </Space>
      </div>
      <Button
        style={{ display: visible ? 'none' : 'inline-block' }}
        type="primary"
        block
        onClick={() => setVisible(true)}
      >
        Add Card
      </Button>
    </div>
  )
}

export default DraggableElement
