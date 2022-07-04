import { Dropdown, Button, Card, Modal, Toast } from '@douyinfe/semi-ui'
import {
  IconDelete,
  IconSetting,
  IconForward,
  IconMore,
} from '@douyinfe/semi-icons'
import Editor from '../../components/Editor'
import { useState } from 'react'
import { NotesProps } from '../../db/db'
import dayjs from 'dayjs'

interface Props {
  item: NotesProps
  content: string
  onUpdate: (params: NotesProps) => void
  onDelete: (id: string) => void
}

export default function List({ content, onUpdate, item, onDelete }: Props) {
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const formatDate = (date: string) => dayjs(date).format('YYYY-MM-DD HH:MM')
  const handleDelete = () => {
    return Modal.error({
      title: 'Delete',
      content: 'Are you sure you want to delete it?',
      okText: 'Confirm',
      cancelText: 'Cancel',
      onOk: () => {
        onDelete(item.id)
      },
    })
  }

  const handleEdit = () => {
    setIsEdit(true)
  }
  const handleCopy = () => {}
  const handleSubmit = (value: string) => {
    const params = { ...item }
    params.body = value
    onUpdate(params)
    setIsEdit(false)
  }

  const MoreSetting = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Dropdown
          position="bottomLeft"
          render={
            <Dropdown.Menu>
              <Dropdown.Item
                icon={<IconDelete style={{ color: '#ff1744' }} />}
                onClick={handleDelete}
              >
                Delete
              </Dropdown.Item>
              <Dropdown.Item
                onClick={handleEdit}
                icon={<IconSetting style={{ color: '#00b0ff' }} />}
              >
                Edit
              </Dropdown.Item>
              <Dropdown.Item
                onClick={handleCopy}
                icon={<IconForward style={{ color: '#ff3d00' }} />}
              >
                Copy
              </Dropdown.Item>
            </Dropdown.Menu>
          }
        >
          <Button icon={<IconMore />} size="small" />
        </Dropdown>
      </div>
    )
  }

  return (
    <>
      {isEdit ? (
        <Editor value={content} onSubmit={handleSubmit} />
      ) : (
        <Card style={{ margin: '10px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span> {formatDate(item.created_at)}</span>
            <MoreSetting />
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Card>
      )}
    </>
  )
}
