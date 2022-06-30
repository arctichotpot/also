import { Button, Card, Space } from '@douyinfe/semi-ui'
import { EditorContent, useEditor, Editor } from '@tiptap/react'
import {
  IconBold,
  IconItalic,
  IconH1,
  IconOrderedList,
  IconList,
} from '@douyinfe/semi-icons'

import StarterKit from '@tiptap/starter-kit'
import styled from 'styled-components'

import './styles.scss'

interface MenuBarProps {
  editor: Editor
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null
  }

  return (
    <Space
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Space spacing={10} className="editor-menu-bar">
        <span
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <IconBold />
        </span>
        <span
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <IconItalic />
        </span>

        <span
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
          }
        >
          <IconH1 />
        </span>
        <span
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <IconOrderedList />
        </span>
        <span
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <IconList />
        </span>
      </Space>
      <Button theme="solid" type="primary">
        发表
      </Button>
    </Space>
  )
}

const EditorCard = styled(Card)`
  height: auto;
`

export default function EditorComponents() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `hello`,
  })

  return (
    <EditorCard
      bodyStyle={{
        padding: 10,
      }}
    >
      <EditorContent editor={editor} />
      <MenuBar editor={editor as Editor} />
    </EditorCard>
  )
}
