import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Space } from '@douyinfe/semi-ui'
import { DragDropContext } from 'react-beautiful-dnd'
import DraggableElement from './DraggableElement'
import { cloneDeep } from 'lodash'
import AddDragComponent from './AddDragComponent'
import { nanoid } from 'nanoid'
import { TodoOperation } from '../../../db/operation'
import { TodoChildrenProps, TodoProps } from '../../../db/db'

const DragDropContextContainer = styled.div`
  border-radius: 4px;
`

interface Props {
  data: TodoProps[]
}
export default function DragComponent({ data }: Props) {
  const [list, setList] = useState<TodoProps[]>([])

  useEffect(() => {
    if (data.length > 0) setList(data)
  }, [data])

  const onDragEnd = (result: {
    draggableId: string
    destination: { droppableId: string | number; index: number }
    source: { droppableId: string | number; index: number }
  }) => {
    const { destination, source } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const listCopy = cloneDeep(list)

    const start = listCopy.find(
      (item: { id: string | number }) => item.id === source.droppableId
    )
    const finish = listCopy.find(
      (item: { id: string | number }) => item.id === destination.droppableId
    )

    const [removed] = start.children.splice(source.index, 1)
    finish.children.splice(destination.index, 0, removed)
    setList(listCopy)

    TodoOperation.update(start.id, start)
    TodoOperation.update(finish.id, finish)
  }

  const onAddDrag = (title: string) => {
    const params: TodoProps = {
      title: title,
      id: nanoid(),
      created_at: '',
      children: [],
    }
    const listCopy = cloneDeep(list)
    listCopy.push(params)
    setList(listCopy)

    TodoOperation.add(params.title)
  }

  const draggableElementCallback = (value: TodoChildrenProps) => {
    const listCopy = cloneDeep(list)
    const index = listCopy.findIndex((item: TodoProps) => item.id === value.pid)
    listCopy[index].children.push(value)
    setList(listCopy)

    TodoOperation.update(listCopy[index].id as string, listCopy[index])
  }

  return (
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <AddDragComponent onAdd={onAddDrag} />
        <Space align="start" wrap>
          {list.map((item) => (
            <DraggableElement
              elements={item}
              key={item.id}
              prefix={item.id}
              callback={draggableElementCallback}
            />
          ))}
        </Space>
      </DragDropContext>
    </DragDropContextContainer>
  )
}
