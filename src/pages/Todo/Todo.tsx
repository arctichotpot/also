import { Typography } from '@douyinfe/semi-ui'
import { TodoOperation } from '../../db/operation'
import DragComponent from './Drag/Drag'
import { useLiveQuery } from 'dexie-react-hooks'

export default function Toto() {
  let data = useLiveQuery(() => TodoOperation.list(), []) || []

  return (
    <>
      <Typography.Title heading={4}>TODO</Typography.Title>
      <DragComponent data={data} />
    </>
  )
}
