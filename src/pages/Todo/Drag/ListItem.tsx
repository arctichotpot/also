import { Draggable } from 'react-beautiful-dnd'
import { Typography } from '@douyinfe/semi-ui'
import styled from 'styled-components'
import { TodoChildrenProps, TodoProps } from '../../../db/db'

const Author = styled.div`
  display: flex;
  align-items: center;
`
const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  clear: both; /*  */
  word-break: break-word; /*  */
  word-wrap: break-word; /* IE */
  white-space: -moz-pre-wrap; /* Mozilla */
  white-space: -hp-pre-wrap; /* HP printers */
  white-space: -o-pre-wrap; /* Opera 7 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: pre; /* CSS2 */
  white-space: pre-wrap; /* CSS 2.1 */
  white-space: pre-line; /* CSS 3 (and 2.1 as well, actually) */
`

const DragItem = styled.div`
  padding: 4px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`

interface Props {
  item: TodoChildrenProps
  index: number
}

const ListItem = (props: Props) => {
  const { item, index } = props

  return (
    <Draggable draggableId={item.id} index={index}>
      {(
        provided: {
          innerRef: any
          draggableProps: JSX.IntrinsicAttributes
          dragHandleProps: JSX.IntrinsicAttributes
        },
        snapshot: any
      ) => {
        return (
          <DragItem
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardFooter>{item.content}</CardFooter>
          </DragItem>
        )
      }}
    </Draggable>
  )
}

export default ListItem
