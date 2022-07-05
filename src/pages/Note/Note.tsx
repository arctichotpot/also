import { Typography, Pagination, Toast } from '@douyinfe/semi-ui'
import Editor from '../../components/Editor'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../db/db'
import List from './List'
import { NoteOperation } from '../../db/operation'
import { NotesProps } from '../../db/db'
import { useEffect, useState } from 'react'

export default function Note() {
  const pageSize = 5
  const [current, setCurrent] = useState<number>(1)

  let data = useLiveQuery(() => db.notes.toArray(), []) || []

  const [list, setList] = useState<NotesProps[]>([])

  useEffect(() => {
    const arr = data.slice((current - 1) * pageSize, current * pageSize)
    setList(arr)
  }, [data])

  const handleSubmit = (value: string) => {
    NoteOperation.add(value)
  }
  const handleUpdate = (value: NotesProps) => {
    NoteOperation.update(value.id, value)
  }
  const handleDelete = (id: string) => {
    NoteOperation.delete(id)
  }

  const handlePagination = (currentPage: number) => {
    const arr = data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    setCurrent(currentPage)
    setList(arr)
  }

  return (
    <>
      <Typography.Title heading={4}>NOTES</Typography.Title>
      <Editor onSubmit={handleSubmit} value="" />
      {list.map((item) => (
        <List
          item={item}
          content={item.body}
          key={item.id}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {data.length > 0 ? (
          <Pagination
            showTotal
            onChange={handlePagination}
            total={data.length}
            pageSize={pageSize}
          ></Pagination>
        ) : null}
      </div>
    </>
  )
}
